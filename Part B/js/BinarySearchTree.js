class Node {
    constructor(initKey, initData, initParent, initLeft, initRight) {
        this.key = initKey;
        this.data = initData;
        this.parent = initParent;
        this.left = initLeft;
        this.right = initRight;
    }
};

export default class BinarySearchTree {
    constructor(initKeyLength) {
        this.root = null;
        this.size = 0;
        this.keyLength = initKeyLength;
    }

    // @todo - YOU MUST UPDATE THIS METHOD SO A KEY ONLY HAS LOWERCASE LETTERS, NO NUMBERS
    generateKey() {
        let key = "";
        for (let i = 0; i < this.keyLength; i++) {
            let randomNum = Math.floor(Math.random() * 26);
            let randomChar;
            randomNum += 97;
            randomChar = String.fromCharCode(randomNum);
            key += randomChar;
        }
        return key;
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    putValue(key, value) {
        if(this.root==null){
            this.root= new Node(key,value,null,null,null);
            this.size++;
            return;
        }
        this.add(this.root,key,value,null);
        this.size++;
    }

    add(node,key,value,parent){
        if(node==null){
            node= new Node(key,value,parent,null,null);
        }else{
            if(key===node.key){
                node.data=value;
                return node;
            }
            else if(key<node.key) node.left = this.add(node.left,key,value,node);
            else node.right= this.add(node.right,key,value,node);
        }
        return node;
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    getValue(key) {
        return this.findKey(key,this.root);
    }
    findKey(key,node){
        if(node==null) return null;
        let cKey=node.key;
        if(key<cKey) return this.findKey(key,node.left);
        else if (key>cKey) return this.findKey(key,node.right);
        else return node.data;
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    removeValue(key) {


    }

    toStringRecursively(traveller, level) {
        let text = "";
        if (traveller.left != null)
            text += this.toStringRecursively(traveller.left, level+1);
        for (let i = 0; i < level; i++) {
            text += "   ";
        }
        text += "   " + traveller.data.toString() + "\n";
        if (traveller.right != null)
            text += this.toStringRecursively(traveller.right, level+1);
        return text;        
    }

    toString() {
        return this.toStringRecursively(this.root, 0);
    }
}