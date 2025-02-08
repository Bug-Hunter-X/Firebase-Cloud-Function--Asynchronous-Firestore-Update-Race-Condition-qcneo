# Firebase Cloud Function Asynchronous Firestore Update Race Condition

This repository demonstrates a common error in Firebase Cloud Functions where asynchronous Firestore updates lead to race conditions and data inconsistencies. The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected version.

**Problem:**  The original code attempts to update multiple Firestore documents concurrently without awaiting the completion of each update. This race condition can result in data loss or incorrect values being written to the database.

**Solution:** The solution involves using `Promise.all` to ensure that all updates are completed before the function returns. This prevents race conditions and maintains data integrity.