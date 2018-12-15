var shell = require("shelljs");

shell.exec("cd packages/react-flyout-menu && yarn start", { async: true });
shell.exec("cd packages/example && yarn start", { async: true });

console.log("Started both apps");
