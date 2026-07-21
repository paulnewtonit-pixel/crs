const fs=require('fs'),vm=require('vm'),assert=require('assert');
const listeners={};
const sandbox={window:{},document:{addEventListener:(name,fn)=>{listeners[name]=fn},getElementById:()=>({})},localStorage:{getItem:()=>null,setItem:()=>{}},Intl,Date,Number,JSON,console};
vm.createContext(sandbox);vm.runInContext(fs.readFileSync(__dirname+'/needs-analysis.js','utf8'),sandbox);
const result=sandbox.window.CourtReadyNeedsAnalysis.diagnostics();
assert.deepStrictEqual(JSON.parse(JSON.stringify(result)),{applicant:{income:3000,expenses:1600,adjustment:-200,available:1200},respondent:{income:2500,expenses:1250,adjustment:300,available:1550},housing:{required:250000,mortgage:150000,gap:100000}});
console.log('Income, Needs and Affordability calculation diagnostics passed.');
