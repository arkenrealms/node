import 'mongoose';

declare module 'mongoose' {
  interface Query<ResultType, DocType, THelpers = {}, RawDocType = DocType, TQueryOp = any, TInitialDoc = RawDocType> {
    /**
     * Runs the query as lean(), converts `_id` -> string `id`,
     * and returns the same ResultType shape.
     */
    asJSON(this: Query<ResultType, DocType, THelpers, RawDocType, TQueryOp, TInitialDoc>): Promise<ResultType>;
  }
}
