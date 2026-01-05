const person3 = {
	talk() {
		let self1 = this;
		setTimeout( function() {
			console.log('this:', self1);	
		}, 1000);
	}
};
person3.talk();
/*-------------------------------------
WEEKLY ASSIGNMENT:

Title: My Personal Diary
Description: The App must 1st prompt login. (Store the login credentials in a file).
After logging in, App must display the Menu:
1. Enter new diary note (For a Specific date)
2. Update diary note (For a Specific date)
3. Search diary note (For a Specific date)
4. Display Diary note for a given range of dates
5. Store the Notes in a .txt file (You can use some encription for the note before saving it into the file. And decript it before printing).
6. On the App being closed or maximum 10 operations are completed, auto logout the user.


1. Accept the date and then check if diary note for the given date already exists. If yes then prompt if user wishes to update it. Else allow user to add new Note for the given date.

2. Accept the date for which Note has to be updated. Prompt user again with password to update the diary note. Once done, display the existing diary note in a Para and also allow the user to update it in textarea (The teatarea must have the copy of previously saved Note).

3. Accept the date for which Note must be displayed. Prompt if user wishes to update it with the button.

4. For the range given (from date, to date) display all the Notes day wise (display the date and day on top of the Note)
*/