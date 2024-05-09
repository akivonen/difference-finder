install:
	npm ci
link:
	npm link
gendiff:
	node bin/gendiff.js
test:
	npm test
lint:
	npx eslint .
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test-watch:
	npx jest --bail --watch
publish: 
	npm publish --dry-run