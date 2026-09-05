
.PHONY: default
default: push

build:
	jekyll build

push: build
	cd _site && rsync -avz * pipal.in:/var/www/pipal.in/

