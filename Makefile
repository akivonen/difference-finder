install:
	npm ci
gendiff:
	node bin/gendiff.js
make lint:
	npx eslint .
publish: 
	npm publish --dry-run
.PHONY: test