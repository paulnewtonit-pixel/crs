const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { randomUUID } = require('node:crypto');

const source = fs.readFileSync(require.resolve('./asset-schedule.js'), 'utf8');
const sandbox = {
  window: {},
  document: { addEventListener() {} },
  crypto: { randomUUID },
  Intl,
  Date,
  Math,
  console,
  localStorage: { getItem() { return null; }, setItem() {} }
};

vm.runInNewContext(source, sandbox, { filename: 'asset-schedule.js' });
const result = sandbox.window.CourtReadyAssetSchedule.diagnostics();

assert.deepEqual(JSON.parse(JSON.stringify(result)), {
  difference: 20,
  workingDifference: 10,
  percentage: 16.67,
  level: 'Moderate',
  stale: true,
  applicantTotal: 80,
  respondentTotal: 95,
  workingTotal: 88,
  totalNet: 68,
  noAutomaticWorking: true,
  missingRules: 5,
  filteredCount: 1,
  firstSorted: 'Diagnostic asset'
});

console.log('Asset Schedule calculation diagnostics passed.');
