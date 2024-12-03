## Biome #4684 Reproduction

Issue: https://github.com/biomejs/biome/issues/4684

```
pnpm install
pnpm run format
```


The output is as in the index.ts file.
The playground has output as follows:

```ts
declare module "#shopware" {
  export type Schemas =
    import("@shopware/api-client/store-api-types").components["schemas"];
}

```