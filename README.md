# Reproducing the bug

1. Run npm start in the root of the repository
2. Open up the browser console and run `document.getElementById('first-name').value`

After running step 2, take a look at the browser's console and see that there is not message printed

If you want to prevent the bug from happening, remove the call to function "sleep" at ./public/scripts/reproduce-bug.js
