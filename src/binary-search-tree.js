const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    return this.rootTree;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootTree = addData(this.rootTree, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data == data) {
        return node
      }

      if (node.data > data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }

      return node
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    return searchData(this.rootTree, data);

    function searchData(node, data) {
      if (!node) {
        return false
      }

      if (node.data == data) {
        return true
      }

      if (data < node.data) {
        return searchData(node.left, data)
      } else {
        return searchData(node.right, data)
      }
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    return searchData(this.rootTree, data);

    function searchData(node, data) {
      if (!node) {
        return null
      }

      if (node.data == data) {
        return node
      }

      if (data < node.data) {
        return searchData(node.left, data)
      } else {
        return searchData(node.right, data)
      }
    } 
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootTree = removeData(this.rootTree, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node
      } else {
        if (data > node.data) {
          node.right = removeData(node.right, data);
          return node
        } else {
          if (!node.left && !node.right) {
            return null
          }

          if (!node.left) {
            node = node.right;
            return node
          }

          if (!node.right) {
            node = node.left;
            return node
          }

          let maxFromLeft = node.left;
          while (maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right
          }
          node.data = maxFromLeft.data;

          node.left = removeData(node.left, maxFromLeft.data);

          return node
        }
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    if (!this.rootTree) {
      return null
    }

    let minData = this.rootTree;
    while (minData.left) {
      minData = minData.left
    }

    return minData.data
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    if (!this.rootTree) {
      return null
    }

    let maxData = this.rootTree;
    while (maxData.right) {
      maxData = maxData.right
    }

    return maxData.data
  }
}

module.exports = {
  BinarySearchTree
};