var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());

var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            console.log("Inserindo valor " + value + " como raiz");
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinaryTree.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
                console.log("Inserindo valor " + newNode.value + " à esquerda de " + node.value);
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
                console.log("Inserindo valor " + newNode.value + " à direita de " + node.value);
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinaryTree.prototype.postOrderTraversal = function (node) {
        if (node === void 0) { node = this.root; }
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log("Visitando nó: " + node.value);
        }
    };
    return BinaryTree;
}());

// Exemplo de uso:
var tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

console.log("Percurso em pós-ordem:");
tree.postOrderTraversal();
