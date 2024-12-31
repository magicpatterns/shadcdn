# Shadcdn

shadcn-ui as a ESM module hosted on a CDN.

```
https://cdn.jsdelivr.net/npm/shadcdn/+esm
```

If you are looking for the normal way to use shadcn, visit the [homepage here](https://ui.shadcn.com/)

## To release a new version:

1. Update version in package.json
2. Add components, be sure to add them to the index file
   3. Run `npx shadcn add -all -yes` will pull the latest components from the main repo
3. `yarn build`; `npm publish`
