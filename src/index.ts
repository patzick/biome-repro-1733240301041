/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */
/**
 * Input to format:
 
 declare module "#shopware" {
  export type Schemas = import("@shopware/api-client/store-api-types").components["schemas"];

}
 */

declare module "#shopware" {
	export type Schemas = import(
		"@shopware/api-client/store-api-types",
	).components["schemas"];
}
