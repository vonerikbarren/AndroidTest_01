import fs from "fs";
import path from "path";

export class StoreReport {
  constructor(jsonPath) {
    const fullPath = path.resolve(jsonPath);
    const raw = fs.readFileSync(fullPath, "utf-8");
    this.data = JSON.parse(raw);
  }

  get(month, field) {
    const entry = this.data[month];
    if (!entry) {
      return `Month '${month}' not found.`;
    }

    if (field === "total") {
      return {
        month,
        revenue: entry.revenue,
        expenses: entry.expenses,
        net: entry.net
      };
    }

    if (!entry[field]) {
      return `Field '${field}' not found for month '${month}'.`;
    }

    return entry[field];
  }
}
