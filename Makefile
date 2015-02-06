watch:
	@watchify hhFrame.js --standalone hhFrame -o ./dist/hhFrame.js
build:
	@browserify hhFrame.js --standalone hhFrame > ./dist/hhFrame.js
	@uglifyjs ./dist/hhFrame.js --compress --source-map ./dist/hhFrame.min.map > ./dist/hhFrame.min.js
