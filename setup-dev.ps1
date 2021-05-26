npx install-peerdeps --dev eslint-config-airbnb
yarn add -D prettier prettier-eslint
yarn add eslint @babel/core @babel/eslint-parser -D
yarn add -D eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8
yarn add -D eslint-config-prettier eslint-plugin-prettier


# Setup conventional changelog cz-cli message
npm install commitizen -g
commitizen init cz-conventional-changelog --yarn --dev --exact

npx husky-init
yarn
