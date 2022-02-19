import { Model } from 'objection';
export default class BaseModel extends Model {
    id: number;
    key: string;
    value: string;
    status: string;
    meta: Record<string, any>;
    currentScore: number;
    dailyScore: number;
    monthlyScore: number;
    yearlyScore: number;
    createdAt: string;
    updatedAt: string;
    static idColumn: string;
    $beforeValidate(jsonSchema: any, json: any, opt: any): any;
    $beforeInsert(): any;
    $beforeUpdate(): any;
    static get namedFilters(): any;
}
