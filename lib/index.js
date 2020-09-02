/**
 * Add some SQL magic to your javascript :)
 */

const { declare } = require('@babel/helper-plugin-utils');
const { types: t } = require('@babel/core');

module.exports = declare((api, options) => {
  api.assertVersion(7);

  return {
    visitor: {
      LogicalExpression: function(path) {
        if (path.node.operator === '||') {
          path.replaceWith(
            t.binaryExpression(
              '+',
              t.cloneNode(path.node.left),
              t.cloneNode(path.node.right),
            ),
          );
        }
      },
    },
  };
});
