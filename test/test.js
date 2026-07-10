import { StoreReport } from "../library/StoreReport";

const report = new StoreReport("./database/q4_data.json");

console.log(report.get("October", "total"));
console.log(report.get("November", "net"));
console.log(report.get("December", "notes"));