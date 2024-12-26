***

Hi 👋

## Basic Python Commands You Must Know
### print command

print command is used to print a message on the screen or other standard output device. The message can be a string or any other object. The print command can be used to print any type of object like integer, string, list, tuple, etc. 
### type command
type command is used to check the type or class of an object.

![[image21.png]]

### range command

range command is used to generate a sequence of integers starting from 0 by default to n where n is not included in the generated numbers. We use this command in for loops mostly. 

Syntax: range(start, stop, step) 

start refers to the starting of range (Optional; 0 by default )
stop refers to the number before which you want to stop (Mandatory)
step refers to the increment count (Optional; 1 by default)

![[image27.png]]

Note: If you provide two parameters to range() function, it will always consider them as (start,stop) and not as (stop,step). 


### round command
round command is used to round a number to a given precision in decimal digits. That means if you have so many digits after decimal in a float point number then you can use the round command to round off the specified number. You can mention how many digits you want after the decimal point. 

Syntax: round(number, digits) 

number refers to the floating-point number. 
digits refer to the count of digits you want after the decimal point. (Optional; By default 0)

![[image36.png]]
### input command
input command is used to take input from the user. The flow of the program will be stopped until the user has entered any value. Whatever the user enters it will be converted into a string by the input function. If you want to take an integer as input then you have to convert it explicitly. 

Syntax: input(message)

message refers to the text you want to display to the user. (Optional)

![[image28.png]]
### len command
len command or len() function is used to get the number of items in an object. If the object is a string then len() function returns the number of characters present in it. If the object is a list or tuple it will return the number of elements present in that list or tuple. len() gives an error if you try to pass an integer value to it. 

Syntax: len(object)

object of which you want to find the length (Required)

![[image14.png]]
### Loop commands
In python, we have two primitive loop commands namely while and for. The while loop command is used to execute a set of statements as long as the given condition is true. 

Syntax of while loop: while condition:
statements
update iterator

![[image26.png]]

The for loop command is used to execute a set of statements by iterating over a sequence. This sequence can be a list, tuple, string, dictionary, etc. 

Syntax of for loop: for x in sequence:
statements

![[image35.png]]
## Intermediate Python Commands
### String Commands
In the python programming language, we have various string commands that we can use on string objects. These commands do not change the original string object, they just return a new object. Some of the most important string functions are: 

isalnum(): It checks whether all the characters of a given string are alphanumeric or not. It returns a boolean value. 

Syntax: stringname.isalnum()

![[image1.png]]
### capitalize()
capitalize() function changes the first character of the string to uppercase if it’s lowercase. If the first character is uppercase or an integer or any special character, it doesn’t do anything.

Syntax: stringname.capitalize()
![[image1-1.png]]
### find()
find() command is used to search for a substring in a string. It returns the index of the first occurrence of the substring if it is present otherwise it returns -1. 

Syntax: string.find(substring)

string refers to the string in which you want to search.
substring refers to the value that you want to search.

Example: 

count(): count() function returns the count of occurrences of a substring in a string object.
Syntax: stringname.count(substring, start, end)

stringname refers to the string in which you want to search.
substring refers to the value whose count you want to find.
start refers to that starting index within the string where search starts (Optional)
end refers to that ending index within the string where the search ends (Optional)
### center()
center command is used to align a string in the center, using a specified character (by default it is space) as the fill character. 

Syntax: string.center(length, character)

string is the string that you want to align in center
length is the full length taken by the new string in which both sides will be filled by character and in the center, we will have the original string.
character refers to the character used to fill the missing space on each side. Default is ” ” (space).

![[image32-1024x503.png]]


### List Commands
Just like a string we have various commands for list objects as well. Lists are used to multiple elements in a single object. We can use lists to store elements of different data types. Some of the most important list methods are: 

append(): append command is used to add an element at the end of the list.

Syntax: list.append(element)

list is the list object in which you want to add an element
element refers to the new item that you want to add to the list

### copy()
copy() is used to create a new copy of the list object. It returns a new list object.

Syntax: list.copy()
### insert()
insert command is used to add an element at a specified position in the list object. It takes two parameters position and element. 

Syntax: listname.insert(position, element)

position at which you want to insert a new element. If you give a position greater than the number of elements in the list, it will always insert at the end.
element refers to the new element that needs to be added.

### pop()
pop() method is used to remove an element from a specified position in the list. It returns the element after removing it from the list.

Syntax: listname.pop(position)

position from which you want to remove the element.
### reverse()
reverse method reverses the order of all elements in the list. It modifies the original list object and it doesn’t return anything.

Syntax: list.reverse()


### sort()
sort method is used to sort the elements of the list in ascending order by default. 

Syntax: list.sort()
### Tuple Commands
Tuple is a built-in data type that is used to store multiple elements in a single variable. Tuple objects are ordered, and immutable. There are only two built-in tuple methods which are as follows: 

count(): count method is used to count the occurrences of an element in the tuple. 

Syntax: tuple.count(element)
### index()
This method is used to find the index of the first occurrence of an element. If the element is not found in the whole tuple then it will raise a ValueError.

Syntax: tuple.index(element)

tuple is the tuple object in which you want to search an element
element refers to the item that you wanna search

## Advanced Python Commands List
