install:
	npm ci
gendiff:
	node bin/gendiff.js
test:
	npm test
lint:
	npx eslint .
publish: 
	npm publish --dry-run