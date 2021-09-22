/**
 * Solution to this binary tree programming problem:
 * https://edabit.com/challenge/GGDMJ33wg8y3EHQfP
 */

/**
 * Recursive function which will search through a binary tree to see if one of its nodes
 * equals some desiredValue
 *
 * For the purposes of the problem, a node in a tree is either an array, an integer, or null.
*/
function valueInTree(desiredValue, tree) {
    console.log('top of function, checking ', tree);
    // Base case check - if `tree` is not an array
    // then we are looking at a node without children
    // The childless node will either be null or an integer.
    if(tree === null || !tree.length) {
        if (desiredValue === tree) {
            return true;
        }
        console.log(`base case, child node ${tree} doesnt match`);
        return false;
    }

    // Check root
    const root = tree[0];
    if (desiredValue === root) {
        return true;
    }

    // If its not the root, check left
    const leftChild = tree[1];
    const isFoundInLeftChild = valueInTree(desiredValue, leftChild);

    if(isFoundInLeftChild) {
        return true;
    }

    // Check right child. If it's not there its not in the tree.
    else {
        const rightChild = tree[2];
        const isFoundInRightChild = valueInTree(desiredValue, rightChild);
        return isFoundInRightChild;
    }
}

const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]


console.log('is in tree ', valueInTree(5, arr1));

/***
 Writing out recursive calls:
valueInTree(17, arr1);
// compares 17 to 3. Doesn't match
//
// calls valueInTree(17, [8, [5, null, null], null]
// compares 17 8
//
// calls valueInTree(17, [5, null, null]
//
// compares 17 5. Doesn't match
//
// calls valueInTree(17, null)
//
// compares 17 null. Doesn't match
// returns false
 */
