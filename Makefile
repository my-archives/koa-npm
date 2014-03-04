test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--harmony-generators \
		--reporter spec

clean:
	@rm -rf node_modules

sample:
	@DEBUG=koa-npm node --harmony example.js

.PHONY: test clean
