class KeyValuePair {
    constructor(initKey, initValue) {
        this.key = initKey;
        this.value = initValue;
    }
    
    toString() {
        return "(" + this.key + ", " + this.value.toString() + ")";
    }
}

export default class OpenAddressHashTable {
    constructor(initLength, initKeyLength) {
        this.length = initLength;
        this.size = 0;
        this.keyLength = initKeyLength;
        this.hashTable = [];
    }

    hashCode(key) {
        let charsSum = 0;
        for (let i = 0; i < key.length; i++) {
            let keyChar = key.charAt(i);
            let charAsNum = keyChar.charCodeAt(0);
            charsSum += charAsNum;
        }
        return charsSum % this.length;
    }

    generateKey() {
        let key = "";
        for (let i = 0; i < this.keyLength; i++) {
            let randomNum = Math.floor(Math.random() * 36);
            let randomChar;
            if (randomNum < 10) {
                randomNum += 48;
                randomChar = String.fromCharCode(randomNum);
            }
            else {
                randomNum += 55;
                randomChar = String.fromCharCode(randomNum);
            }
            key += randomChar;
        }
        return key;
    }
    
    // @todo - YOU MUST DEFINE THIS METHOD
    getValue(key) {
        let index = this.hashCode(key);
        let pair = this.hashTable[index];
        // index to length
        for(let i=0; i<this.length; i++){
            pair=this.hashTable[i];
            if(pair!=null && pair.key===key) return pair.value;
        }
        /// 0 to index
        for(let i=0; i<index; i++){
            pair=this.hashTable[i];
            if(pair!=null && pair.key===key) return pair.value;
        }

        return null;
    }
    
    // @todo - YOU MUST DEFINE THIS METHOD
    removeValue(key) {   
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    putValue(key, item) {
        /// Declaring Variables 
        let index = this.hashCode(key);
        let pair = this.hashTable[index];
        let NewPair = new KeyValuePair(key,item);

        //// Case 1 Key Exists in the HashTable 
        if(this.replace(key,item)) return;

        /// Case 2 HashTable is Full
         if(this.size===this.length){
            this.length=this.length*2;
            this.rehash();
            index = this.hashCode(key);
            pair  = this.hashTable[index];
         }
        
        /// Case 3 Insert Item Into Natural Index If Available If Not Linear Probing
        /// Natural Index
        if(pair==null){
            this.hashTable[index]=NewPair;
            this.size++;
            return;
        }
        /// Linear Probing 

        // index to length
        for(let i=index; i<this.length; i++){
            pair=this.hashTable[i];
            if(pair==null) {
                this.hashTable[i]=NewPair;
                this.size++;
                return;
            }
        }
        
        /// 0 to index
        for(let i=0; i<index; i++){
            pair=this.hashTable[i];
            if(pair==null) {
                this.hashTable[i]=NewPair;
                this.size++;
                return;
            }
        }
    }

    replace(key,item){
        let index = this.hashCode(key);
        let pair  = this.hashTable[index];

        for(let i=index; i<this.length; i++){
            pair=this.hashTable[i];
            if(pair!=null && pair.key===key){
                pair.value=item;
                return true;
            } 
        }
        for(let i=0; i<index; i++){
            pair=this.hashTable[i];
            if(pair!=null && pair.key===key){
                pair.value=item;
                return true;
            } 
        }
        return false;
    }

    rehash(){
        let values = Object.values(this.hashTable);
        console.log(values);
        for(let i=0; i<this.length; i++){
            this.hashTable[i]=null;
        }
        for(let i=0; i<values.length; i++){
         this.putValue(values[i].key,values[i].value);
        }
    }


    toString() {
        let text = "[\n";
        for (let i = 0; i < this.length; i++) {
            let kvp = this.hashTable[i];
            let kvpDescription = "null";
            if (kvp != null) {
                kvpDescription = kvp.toString();
            }
            text += "   " + i + ": " + kvpDescription + "\n";
        }
        text += "]\n";
        return text;
    }
};