const fs=require('fs'),vm=require('vm'),assert=require('assert');
let sequence=0;const sandbox={window:{},document:{addEventListener:()=>{},getElementById:()=>({})},localStorage:{getItem:()=>null,setItem:()=>{}},crypto:{randomUUID:()=>`id-${++sequence}`},Intl,Date,Number,JSON,console};
vm.createContext(sandbox);vm.runInContext(fs.readFileSync(__dirname+'/pension-analysis.js','utf8'),sandbox);
const result=JSON.parse(JSON.stringify(sandbox.window.CourtReadyPensionAnalysis.diagnostics()));
assert.deepStrictEqual(result,{applicantCetv:200000,respondentCetv:100000,applicantIncome:9000,respondentIncome:6000,applicantPost:150000,respondentPost:150000,transferDifference:100000,transfer:50000,incomeUnchanged:true});
console.log('Pension Analysis calculation diagnostics passed.');
