***

Hi 👋

BroCode

### Check data type:

```Python
name= ""
print(type(name)) #To check the data type eg. <class 'str'>
```


### Multiple assignment:

Allows us to assign multiple variables at the same time in one line of code.

```Python

Name,age, attractive= "Bro",21,True
A=B=C =10
```

### String Methods: 

```Python
name="bro code"

print(len(name))
print(name.find("d"))
print(name.capitalize())
print(name.upper())
print(name.lower())
print(name.isdigit())
print(name.isalpha()) #false bcoz of white spaces
print(name.count("o")) 
print(name.replace("o","t"))
print(name*3)
```

Type casting = Convert the data type of a value to another data type.

```Python
x=1
y=2.0
z="3"

print(x)
print(int(y))
print(z)

#This is not a permanent change, for that you gotta reassign it.

y = int(y)
```

### Input:

```Python
Name = (input("what's your name?: ")).capitalize()
#Name=Name.capitalize()
age= abs(int(input("How old are you?:")))
print("Hello! " +Name+", you're " +str(age)+ " years old!")
```

When we accept user input, it is always of the str data type( a series of characters)

### Some imp functions:
```Python
import math

pi = 3.14
x,y,z=1,2,3
print(round(pi)) # 3
print(math.ceil(pi)) # 4
print(math.floor(pi)) # 3
print(abs(pi)) #if pi was -3.14
print(pow(pi,2)) # 9.8596
print(math.sqrt(pi)) # 1.7720
print(max(x,y,z)) # 3
print(min(x,y,z)) # 1
```

### Slicing:
Create a substring by extracting elements from another String. It can be used in another data types as well.

- indexing [ ] 
- or slice()
- [ start : stop : step]

```Python
name="Bro Code"
first_name= name[0:3] # or [:3]
last_name = name[4:]
print(first_name)
print(last_name)
# funky_name
print(name[::2]) # Bocd
# reversed_name
print(name[::-1]) # edoC orB
```

```Python
Slice = slice(7,-4) # slice object.
website1="http://Google.com"[Slice]
website2="http://wikihow.com"[Slice]
print(website1+"\n"+website2)

# print(website1[Slice]) # Google
# print(website2[Slice]) # wikihow
```

### if statement:
A block of code that will execute if it's condition is true.

```Python
age= 16
if age>=8:
   # code
elif age<0:
   # code
else:
   # code
```

> Note that python does not have switch statement!
### Logical operators:
 - And , or , not operators
 - Used to check if two or more conditional statements are true.

If we have to check if the temperature is within a specific range , we use AND operator.

```Python
temp=int(input("What is the temperature outside?: "))

if temp>=0 and temp<= 30:
     print("Right News:")
     print("The temp is good today!")
     print("go outside!")
elif temp<0 or temp>30:
     print("Right News:")
     print("The temp is bad today!")
     print("stay inside!")
# to reverse the above rule !
if not(temp>=0 and temp<=30):
     print("False News:")
     print("The temp is good today!")
     print("go outside!")
elif not(temp<0 or temp>30):
     print("False News:")
     print("The temp is bad today!")
     print("stay inside!")
```

### While loop:
A statement that will execute it's block of code, as long as it's condition remains true.

```Python
name=None # or name=""
while not name: # or while len(name)==0:
    name = input("Enter your name:")
print("Hello "+name)
```

### for loop:
A statement that will execute it's block of code a limited amount of time.

```text
while = unlimited 
for = limited

Main difference between them is that in for loop , we already know for how long we have to repeat a block of code.
```

```Python
for i in range(10):
     print(i)
for i in range(3,21):
     print(i)
for i in range(50,100+1,2):
    print(i)
for i in "Bro code":
    print(i)
```

```Python
# this is a weird code!
for i in range(10):
    print(i)
for i in range(3,9):
    print(i) 
for i in range(5,10+1,2):
    print(i)
for i in "Bro code":
    print(i)
```

```Python
import time

for secs in range(10,0,-1):
     print(secs)
     time.sleep(1)
print("Happy new year!")
```

```Python
import time

print("wait for 10 secs")
for i in range(10):
     time.sleep(1)
print("Happy new year!")
```
### Nested loops:
The "inner loop" will finish all of its iterations before finishing one iteration of the "outer loop".

```Python
import time

rows=int(input("How many rows?"))
cols=int(input("How many columns?"))
Symbol=input("Enter a symbol to use:")
for i in range(rows):
  for j in range(cols):
      print(Symbol,end="")
      time.sleep(1)
  print()
```


### Prevent new line print!:

```Python

print("something", end="")
```

### loop control statements:
Change a loops execution from its normal sequence
```text
# break= used to terminate the loop entirely

# continue= skips to the next iteration of the loop 

# pass= does nothing, acts as a placeholder 
```

```Python
while True:
    name = input("Enter your name:")
    if name!="":
        break

phone_number="123-456-7890"

for i in phone_number:
    if i=="-":
        continue
    print(i,end="") # 1234567890
print()
for i in range(1,21):
    if i==13:
        pass
    else:
        print(i)
```


### List

Used to store multiple items in a single variable.

```Python
food=["pizza","hamburger", "hotdog","Spaghetti"]
print(food)
print(food[0])
```

*Pro* : You can always change/update or add atoms items in a list.(later in the program after declare one)

```python
food=["pizza","hamburger", "hotdog","Spaghetti"]
# Few useful functions of list:
food.append("ice cream")
food.remove("hotdog")
food.pop()
food.insert(0,"cake")
food.sort() # sort alphabetically
print(food)
food.clear()
```

### 2D lists
A list of lists.
```python
drinks=["coffee","Soda","tea"]
dinner=["pizza","Hamburger","Hotdog"]
dessert=["cake","Ice cream"]

food=[drinks,dinner,dessert]
print(food[1][2])
```

### Tuple
Collection which is ordered and unchangeable used to group together related data.

Can Tuples have duplicate values?

```python
student=("Bro",21,"male")
# Functions related to tuples:

print(student.count("Bro"))
print(student.index("male"))
for x in student:
    print(x)
if "Bro" in student:
    print("Bro is here")
```


### List of topics:

```text
List
Tuple
set
Dictionary
Keyword args
Positional args
args
kwargs
Exception
```


### Set
Collection which is unordered , unindexed, No duplicate values

```python
utensils={"fork","Spoon","Knife"}
dishes={"Cup","Plate","Bowl"}
utensils.add("napkin")
utensils.clear()
dishes.update(utensils)
dinner_table=utensils.union(dishes)
for x in dinner_table:
    print(x)
print(utensils.difference(dishes))
# It'll print what utensils have that dishes haven't
print(utensils.intersection(dishes))
``` 


### Dictionary

A changeable , unordered collection of unique key: value pairs fast because they use hashing, allow us to access a value quickly.

```python
Capitals={'USA':'Washington DC','India':'New Delhi','Russia':'Moscow'}
print(Capitals['India'])
```

If we try to print the value of any key which doesn't exists, we'll encounter an error that will interrupt the normal flow of code, so the safer way is to use get methods of it. 

```python
print(capitals.get('Genrmany'))
print(capitals.keys())
print(capitals.values())
print(capitals.items())
for key,value in capitals.items():
    print(key,value)
```

Dictionaries are mutable means that we can change or modify alter them after the program is running.

```python
capitals.update({'Germany':'Berlin'})
capitals.pop('china')
capitals.clear()
```

### Index Operator[]
It gives accessto a sequence's element(str,list,tuples)

```python
name="bro code"

if(name[0.islower]):
	name=name.capitalize()
print(name) # other way is to use ASCI code

# create a substring: 
first_name=name[0:3].upper()
print(first_name)

# last_char=name[-1]
```
### Function
A block of code which is executed only when it is called.
The process of calling a function is also knowns as invoking a function.
```python
def hello1():
    # If you don't know what your function will do, Just wrtie pass
    print("hello!")
hello1()
# hello("Kishor") # known as Arguments
def hello(name,age): # known as Parameter
     print(f"hello {name} hi how are you , your age = {age}") # F string

name="Bro"
hello(name,20)

```
```python
def hello(fn,ln,age):
    print("hello"+fn+""+ln)
    print("You're "+str(age)+"Years old")

hello("Bro","code",21)
```

### Return statement
Functions send Python values/objects back to the caller. These values/objects are known as the function's return value

```python
def multiple(num1,num2):
    result=num1*num2
    return result # or num1*num2

print(multiply(6,8))
```
### Keyword arguments:
Arguments preceded by an identifier when we pass them to a function. The order of the arguments doesn't matter, unlike positional arguments Python knows the names of the arguments that our function receives.

```python
def hello(first, middle, last):
    print("hello"+first+""+middle+""+last)

hello(last="code",middle="Dude", first="Bro")
```
### Nested function calls

Function calls inside other function calls innermost functon calls are resolved first returned value is used as argument for the next function.

```python
num=input("Enter a whole positive number:")
num=float(num)
num=abs(num)
num=round(num)
print(num)

# we can write the same program inl less no. of lines using nested

print(round(abs(float(input("Enter a whole positive number:")))))
```
### Scope

The region that a variable is recognized. A variable is only available from inside the region it is created. A global and locally scoped versions of a variable can be created. 
```python
name="Bro" #global scope, ava. inside & outside function

def display_name():
    name="Code" # local scope, ava. only inside this fun()
    print(name)
print(name)
display_name()
```
```txt
Python follows this rule:

L=Local
E=Enclosing
G=Global
B=Build-in
```
### Args
Parameter that will pack all arguments into a tuple useful so that a function can accept a varying amount of arguments.

```Python
def add(num1,num2):
    sum=num1+num2
    return sum
print(add(1,2))

# But what if we want to add(1,3,4)?
```

```Python
def add(*args):
    sum=0
    for i in args:
        sum+=i
        return sum
print(add(1,3,4))

def add2(*stuff):
    sum=0
    stuff[0]=0
```

> Tuples are immutable so this won't work, but one way to do it is by casting it to list and list are mutable.

>     stuff=list(stuff)
>     stuff[0]=0

### kwargs
Parameter that will pack all arguments into a dictonary useful so that a function can accept a varying amount of keyword arguments.

```python
def hello(**kwargs):
    # print("hello" +kwargs['first']+" "+kwargs['last'])

    print("Hello",end="")

    for key, value in kwargs.items():
        hello(first="Bro",middle="Dude", last="Code", title="Mr.")
    
    # Hello Mr. Bro Dude Code
```
### str.format()
Opitional method that gives users more control when displaying output.

```python
animal="cow"
item="moon"
# print("The" +animal+"jumped over the"+item)
print("The {} jumped over the {}".format("cow","moon")) # we can also use variables here
# {} this is known as placeholder
```
#### positional args
```python
print("The {1} jumped over the {0}".format(animal,item))
```

#### keyword args
```python
print("The {} jumped over the {}".format(animal="cow",item="moon"))
# {} this is known as format field!

#another way
text="The {} jumped over the {}"
print(text.format(animal,item))
```
#### Add some padding
Add some padding when displayed.

```python
name="Bro"
print("Hello, My name is {}".format(name))

print("Hello, My name is {:10} Nice to meet ya!".format(name))
# {:<10}
# {:>10}
# {: ^10}
# {0:<10} keyword args
# {name:10} positional args
```
#### formatting numbers
```python
number=3.14159
print("The no. pi is {:.3f}".format(number))

# so, Apperantly this will also round off your number.

num=1000
# {:,} 1,000
# {:b} binary 1111101000
# {:o} octal 1750
# {:x || X} Hexa 3E8
# {:e || E} scientific notation 1.000000E+03
```
### Random Numbers

First we have to random module first!!

```python
import randow

x=random.randint(1,6)
print(x) # will generate random digits from 1 to 6

y=random.random()
print(y) # This will generate random floating point numbers b/w 0 & 1
```

```python
import random

mylist=['rock','paper','scissors']
z=random.choice(mylist)
print(z) # rock
```

```python
cards=[1,2,3,4,5,6,7,8,9,"J","Q","K","A"]
random.shuffle(cards)
# will print cards list in random way!
```

### Exception

Events detected during execution that interrupt the flow of a program.

```python
numerator=int(input("Enter a number to divide:"))
denominator=int(input("Enter a number to divide by:"))

result= numberator/denominator
print(result)

# ZeroDivisionError: division by zero

```
```python
try:
    numerator=int(input("Enter a number to divide:"))
    denominator=int(input("Enter a number to divide by:"))

    result= numberator/denominator
    print(result)
except Exception:
    print("Something went wrong:( " ))
```
It is not considered a good practice to have a single except block that'll handle all Exception. It's much better to first handle specific exceptions when they occur and we can do so by writing additional except blocks.

```python
try:
    numerator=int(input("Enter a number to divide:"))
    denominator=int(input("Enter a number to divide by:"))

    result= numberator/denominator
    print(result)
except ZeroDivisionError:
    print("You cannot divide a number by zero! " ))
    # what about 5/string?

except ValueError:
    print("Enter only numbers")
except ValueError as e:
    print(e)
    print("Enter only numbers")
```

```txt
try:
    # code
except xyz:
    # code
else:
    print(result)

finally: # finally clause
    print("This will always execute!")
```

Whether or not, we encountered an exception, this block of code(finally) will always occur!


### File Detection
```python
import os
path="C:\\users\\cakow\\Desktop\\test.txt"
if os.path.exists(path):
    print("That location exists!")
if os.path.isfile(path):
    print("That is a file")
elif os.path.isdir(path):
    print("That is a folder")
else:
    print("File not found!")
```
#### Read a file
```python
# for this you need a text file! file name or file path
with open('text.txt') as file:
    print(file.read())
print(file.close)
```
If you write your code using with open(), it'll automatically close the file!
you don't need to do it manually. Also , it doesn't catch and handle any exception.

```python
import os
path="C:\\Users\\cakow\\Desktop\\folder"
if os.path.exists(path):
    print("That location exists!")
    if os.path.isfile(path):
        print("That is a file")
    elif os.path.isdir(path):
    print("That is a directory!")
else:
    print("That location doesn't exists!")
```
```txt
Text file:
Hey Bro!
```
```python
with open('text.txt') as file:
    print(file.read())

# This will close the file automatically
```

```python
# example 2
try:
    with open('text.txt') as file:
        print(file.read())
except FileNotFoundError:
    print("That file was not found:( ")
```

#### write a file

with, with open() function we have 'r' parameter set by default we can change/use it as:
```python
Text="Yoooooooo!\n"
with open ('text.txt','w') as file:
    file.write(text)
```
but if we change the text variable, it will overwrite it. For saving, we have to append it.
To do so, just change 'w' to 'a'.

#### Copy a file
```txt
copyfile()=copies contents of a file
copy()=copyfile()+permission mode+ destination can be directory
copy2()=copy()+ copies metadata(file's creation and modification times)
```
```python
import shutil
shutil.copyfile('test.txt','copy.txt') # source file , destination file
shutil.copy('test.txt','copy.txt')
shutil.copy2('test.txt','copy.txt')
```

#### Move file
```python
import os
source="test.txt"
destination="C:\\Users\\cakow\\Desktop\\test.txt"
try:
    if os.path.exists(destination):
        print("There is already a file there")
    else:
        os.replace(source, destination)
        print(source+"was moved")
except FileNotFoundError:
    print(source+"was not found")
```
change file by folder above, it will do the same thing.

#### Delete a file

```python
import os

os.remove('file path')

# But what if, we tryna delete a file that doesn't exists?
```
```python
path="text.txt"
try:
    os.remove(path)
except FileNotFoundError:
    print("That file doesn't exist!")
```
```python
# Change
path="empty_folder"

# same code... os.rmdir(path)
except PermissionError:
    print("you do not have permission to delete that file/folder!")
```
Now this function will not delete a folder that contain file. You'll get an OsError. 
For doing that you need shutil module

function=> shutil.rmtree(path)

Therefore, we have three functions to delete a file
1. os.remove(path) # Delete a file
2. os.rmdir(path) # Delete an empty directory
3. shutil.rmtree(path) # Delete a directory containing files

### Modules

A file containing python  code.
May contain functions, classes, etc.

Used with modular programming, which is to separate a program into parts

we can create multiple modules and use them together in our main program!

Create Module named messages

```python
def hello():
    print("Hello! people")
def bye():
    print("Bye Bye")
```

Now, If we need access to this module we'll have to import it, as:

```python
import messages
messages.hello()
```
or

```python
import messages as msg
```
or

```python
from messages import hello, bye or *
hello()
bye()
```
help("modules") will list all prelist modules.

### Projects in Py

Now, Build a Rock, Paper , Scissors game!

### Object Oriented Programming(OOP)
```python
class Car:
    pass
```
```python
from Car import car
```
```python
class car:
    def __init__(self,make,model,year,color):
        self.make=make
        self.model=model
        self.year=year
        self.color=color
    def drive(self):
        print("This car is driving")
    def stop(self):
        print("This car is stopped")
```
```python
from car import car
car_1=car("Chevy","Corvette",2021,"blue")
print(car_1.make)
print(car_1.model)
print(car_1.year)
print(car_1.color)

car_1.drive()
car_1.stop()
```
```python
# Now, replace car from def drive() and make it
def drive(self):
    print("This"+self.model+"is driving")
```
A class can function as a blueprint to create objects we can assign attributes what describes an object is or has and method.

#### Class Variables

variables declared inside a constuctor is called instance variable.

A class variable is declared inside the class but outside the constructor
```python
class car:
    wheels=4

    def __init__(self):
        pass
car_1.wheels=2

print(car_1.wheels)
print(car_2.wheels)
print(car.wheels)
```

#### Inheritance
```python
class Animals:
    alive=True
    def eat(self):
        print("This animal is eating")
    def sleep(self):
        print("This animal is sleeping")
class Rabbit(Animal):
    pass
class Fish(Animal):
    pass
class Hawk(Animal):
    pass
rabbit=Rabbit()
fish=Fish()
hawk=Hawk()

print(rabbit.alive)
fish.eat()
hawk.sleep()
```
Each of these inherited class can have their own Attributes and methods.
```python
class Rabbit(Animal):
    def run(self):
        print("This rabbit is running")
class Fish(Animal):
    def swim(self):
        print("This fish is swimming")
class Hawk(Animal):
    def fly(slef):
        print("This Hawk is flying")
rabbit.run()
fish.swim()
hawk.fly()
```
#### Multilevel Inheritance
When a derived class(child) inherits another derived(child) class.

```python
class Organism:
    alive=True
class  Animal(Organism):
    def eat(self):
        print("This animal is eating")
class Dog(Animal):
    def bark(self):
        print("This dog is barking")
dog=Dog()
print(dog.alive)
dog.eat()
dog.bark()
```
#### Multiple Inheritance
When a child class is derived from more than one parent class.
```python
class Prey:
    def flee(self):
        print("This animal flees")
class Predator:
    def hunt(self):
        print("This animal is hunting")
class Rabbit(Prey):
    pass
class Hawk(Predator):
    pass
class Fish(Prey,Predator):
    pass
rabbit=Rabbit()
hawk=Hawk()
fish=Fish()

rabbit.flee()
hawk.hunt()
fish.hunt()
fish.flee()
```
#### Method Overriding

It is an ability of OOP language to allow a sub-class AKA child class to provide a specific immplementation of a method that is already provided by one of it's parent classes.
```python
class Animal:
    def eat(self):
        print("This animal is eating")
class Rabbit(Animal):
    def eat(self):
        print("This rabbit is eating a carrot")
rabbit=Rabbit()
rabbit.eat()
```




#### Method chaining
calling multiple methods sequentially.
Each call performs an action on the same object and returns self

```python
class Car:
    def turn_on(self):
        print("You start the engine")
    def drive(self):
        print("You drive the car")
    def brake(self):
        print("You step ont the brakes")
    def turn_off(self):
        print("You turn off the engine")
car=Car()
car.turn_on()
car.drive()
# Or you can write
car.turn_on().drive().brake().turn_off()
```

But wait!, You'll get an AttrivuteError. By default, Python returns None. We have to return self in each methods.

```python
# example
def turn_on(self):
    print("You start the engine")
    return self
```
Python will return self as 
```txt
car.turn_on().drive()--->car().drive()
```
Now, To make things more readable use this.

```python
car.turn_on()\
car.drive()\
car.break()\
car.turn_off()
# \ this is a line continuation method.
```


***


#### Method chaining
calling multiple methods sequentially.
Each call performs an action on the same object and returns self

```python
class Car:
    def turn_on(self):
        print("You start the engine")
    def drive(self):
        print("You drive the car")
    def brake(self):
        print("You step ont the brakes")
    def turn_off(self):
        print("You turn off the engine")
car=Car()
car.turn_on()
car.drive()
# Or you can write
car.turn_on().drive().brake().turn_off()
```

But wait!, You'll get an AttrivuteError. By default, Python returns None. We have to return self in each methods.

```python
# example
def turn_on(self):
    print("You start the engine")
    return self
```
Python will return self as 
```txt
car.turn_on().drive()--->car().drive()
```
Now, To make things more readable use this.

```python
car.turn_on()\
car.drive()\
car.break()\
car.turn_off()
# \ this is a line continuation method.
```
#### Super Function
Function used to give access to the methods of a parent class.

Returns a temporary object of a parent class when used.
```python
class Rectangles:
    def __init__(self,len,wid):
        self.len=len
        self.wid=wid
class Square(Rectangles):
    def __init__(self,len,wid):
        super().__init__(len,wid) # I wonder what would happen if i remove this method? will it work or throw an error? more likly an error!
    def area(self):
        return self.len*self.wid
class Cube(Rectangles):
    def __init__(slef,length,width,height):
        super().__init__(length,width)
        self.height=height
    def Volume(self):
        return self.length*self.width*self.height
square=Square(3,3)
cube=Cube(3,3,3)
print(square.area())
print(cube.volume())
```
#### Abstract classes
Prevents a user from creating an object of that class + comples a user to Override abstract methods in a child class!

```txt
abstract class= a class which contains one or more abstract methods.

abstract method=a method that has a declaration but does not have an implementation.
```
```python
from abc import ABC,abstract methods 
class Vehicle(ABC):
    @abstractmethod
    def go(self):
        pass
class Car(Vehicle):
    def go(self):
        print("You drive the car")
class Motorcycle(Vehicle):
    def go(self):
        print("You ride the motorcycle")
# vehicle=Vehicle()
car=Car()
motorcycle=Motorcycle()
# vehicle.go()
car.go()
motorcycle.go()
```
#### Objects as arguments
```python
class Car:
    color=None
def change_color(Car, color):
    Car.color=color
car_1=Car()
car_2=Car()
car_3=Car()
change_color(car_1,"red")
change_color(car_2,"white")
change_color(car_3,"blue")
print(car_1.color)
print(car_2.color)
print(car_3.color)
```

### Duck Typing
Concept where the class of an object is less important than the methods/attributes.
Class type is not checked if minimum methods/attributes are present.
"IF IT WALKS LIKE A DUCK, AND IT QUACKS LIKE A DUCK, THEN IT MUST BE A DUCK!"
```python
class Duck:
    def Walk(self):
        print("This duck is walking")
    def Talk(self):
        print("This duck is qwuacaking")
class Chicken:
    def Walk(self):
        print("This chicken is walking")
    def Talk(self):
        print("This chicken is clucking")
class Person():
    def Catch(self,duck):
        duck.Walk()
        duck.Talk()
        print("You vaught the critter!")
duck=Duck()
chicken=Chicken()
person=Person()

person.catch(duck) # here, duck even can be chicken!
```
If you remove walk method in chicken class then we'll get an attributeError

### Walrus operator :=
```txt
=> new to Python 3.8
=> assignment expression AKA walrus operator
=>assigns values to variables as part of a larger expression
```
```python
# happy=True
# print(happy)
print(happy:=True)
```
```python
foods=list()
while True:
    food=input("What food do you like?:")
    if food=="quit":
        break
    foods.append(food)
```
```python
foods=list()
while food:= input("What food do you like?: ")!="quit":
    food.append(food)
```
### functions to variables

```python
say=print
say("Whoa! I can't beleive this works! :O ")
# Just amazing!
```
```python
def Hello():
    print("Hello")
print(Hello) # It'll print the memory address
# <function hello at 0x0225D850>
hi=Hello
print(hi)
hi()
```
### Higher order functons
A function that either:

1. Accepts a function as an argument or

2. Returnsa function(In python, functions are also treated as objects)
```python
def loud(text):
    return text.Upper()
def quiet(text):
    return text.Lower()
def hello(func): # this is a higher order function
    text=func("Hello")
    print(text)
hello(loud)
# HELLO
```
```python
def divisor(x):
    def dividend(y):
        return y/x
    return dividend
divide=divisor(2)
print(divide(10))
# 5.0
```
### Lambda 
Lambda function=Function written in 1 line using lambda keyword accepts any number of arguments, but only has one expression. (think of it as a shortcut)

(Useful if needed for a short period of time, throw-away)
```txt
lambda parameters: expression
```
```python
def double(x):
    return x*2
print(double(5))
double2=lambda x:x*2
print(double(5))
multiply=lambda x,y:x*y
add=lambda x,y,z:x+y+z
full_name=lambda first_name,last_name:first_name+" "+last_name
age_check=lambda age:True if age>=18 else False
```
### Sort
sort() method=Used with lists
sort() function=Used with iterables
```python
students=["Squidward","Sandy","Patrick","Spongebob","Mr. Krabs"]
print(student.sort()) #inbuild w/ lists, or
for i in students:
    print(i)
students.sort(reverse=True)# reverse or Key
```
It'll not work with tuples!
Here we use sort function.

```python
sorted_students=sorted(students)
for i in sorted_students:
    print(i)
sorted_students=sorted(students,reverse=True)
```
```python
students=[("Squidward","F",60),("Sandy","A",33),("Patrick","D",36),("Spongebob","B",20),("Mr. Krabs","C",78)]# see if here \n works!
grade=lambda grades:grades[1]
students.sort(key=grade)# we can also use reverse here.
for i in students:
    print(i)
# what if students was a tuple and not lists?
```

### Map
map() = applies a function to each item in an iterable(list,tuple etc)

map(function,iterable)

```python
Store=[("Shirt",20.00),("Pants",25.00),("Jacket",50.00),("Socks",10.00)]
to_euros=lambda data:(data[0],data[1]*0.82)
Store_euros=list(map(to_euros,Store))
for i in Store_euros:
    print(i)
```
### Filter
Filter() = Creates a collection of elements from an iterable for which a function returns True.

```python
#filter(function,iterable)
friends=[("Rachel",19),("Monica",18),("Phoebe",17),("Joey",16),("Chandler",21),("Ross",20)]
age=lambda data:data[1]>=18
drinking_buddies=list(filter(age,friends))
for i in drinking_buddies:
    print(i)
```
### Reduce
reduce() = apply a function to an iterable and reduce it to a single cumulative value. Performs function on first two elements and repeats process until 1 value remains.

```python
#reduce(function,iterable)
import funtools
Letters=["H","E","L","L","O"]
word=funtools.reduce(lambda x,y:x+y,Letters)
print(word)
#HELLO
```
```python
import funtools
Factorial=[5,4,3,2,1]
Data=funtools.reduce(lambda x,y,:x*y,Factorial)
print(Data)# Data or Result
```
### List Comprehensions
A wat to create a new list with less syntax can mimic certain lambda functions, easier to read.

```python
#list=[expression for item in iterable]
squares=[]
for i in range(1,11):
    squares.append(i*i)
print(squares)
#or
squares=[i*i for i in range(1,11)]
print(squares)
```
```python
students=[100,90,80,70,60,50,40,30,0]
passed_students=list(filter(lambda x:x>=60,students))
print(passed_students)
# or
# Now, using list comprehension:
# list=[expression (if,else) for item in iterables if conditional]
students=[100,90,80,70,60,50,40,30,0]
passed_students=[i for i in students if i>=60]
print(passed_students)
# passed_students=[i if i>=60 else "FAILED" for i in students]
```

### Dictionary Comprehensions
Create dictionaries using an expression can replace for loops and certain lambda functions.
```txt
dictionary={key: expression for(key,value) in iterable}
```
```python
cities_in_f={'New York':32,'Boston':75,'Los Angles':100,'Chicago':50}
cities_in_c={key:round((value-32)*5/9) for (key,value) in cities_in_f.items()}
print(cities_in_c)
```
```python
# dictionary={key:expression for (key,value) in iterable if conditional}
weather={'New York':"Snowing",'Boston':"Sunny",'Chicago':"Cloudy"}
sunny_weather={key:value for (key,value) in weather.items() if value=="Sunny"}
print(sunny_weather)
```
```python
# dictionary={key:(if/else) for (key,value) in iterable}
cities={'New York':32,'Boston':75,'Los Angles':100,'Chicago':50}
desc_cities={key:("WARM" if value>=40 else "Cold") for (key,value) in cities.items()}
print(desc_cities)
```
```python
dictionary={key:function(value) for(key,value) in iterable}
def check_temp(value):
    if value>=70:
        return "HOT"
    elif 69>=value>=40:
        return "WARM"
    else:
        return "COLD"
cities={'New York':32,'Boston':75,'Los Angles':100,'Chicago':50}
desc_cities={key:check_temp(value) for (key,value) in cities.items()}
print(desc_cities)
```
### Zip function
Zip(*iterables)=aggregate elements from two or more iterable(list,tuples,sets,etc.)

Creates a zip object with paired elements stored in tuples for elements within the zip object.

```python
usernames=["Dude","Bro","Mister"]
passwords=("P@ssword","abc123","guest")
user=zip(usernames,passwords)
for i in users:
    print(i)
```
### if_name_=='_main_'
* why tho?

1. Module can be run as a standalone program
2. Module can be imported and used by other modules

Python interpretere sets "special variables" , one of which is __ name__.

Then Python will execute the code found within __ main__.

### Time module

epoch= a date and time from which a computer measures system time.

```python
import time
print(time.ctime(0))# convert a time expressed in seconds since epoch to a readable sentence.

# epoch= when your computer thinks time began (reference point)

print(time.time())# return current seconds since epoch

# 2 ways to get the current time:
print(time.ctime(time.time()))
time_object=time.localtime()
print(time_object)
# use python directives
local_time=time.strftime("%B %d %y %H: %M: %S", time_object) 
print(local_time)
```
```python
time_string="20 April, 2020"
time_object=time.strptime(time_string,"%d %B, %y) # See if y is in cap
print(time_object)
```
```python
time_tuple=(2020,4,20,4,20,0,0,0,0)
# we can pass value as long as "9"
time_string=time.asctime(time_tuple)
print(time_string)
```

### Threading
Thread= A flow of execution. like a separate order of instructions. However, each thread takes a turn running to achieve concurrency

GIL=(Global interpreter lock), allows only one thread to hold the control of the python interpreter at any one time.

CPU bound= Program/task spends most of it's time waiting for interval events(CPU intensive) (use multi-processing)

io bound= program/task spends most of it's time waiting for external events(user input,web scrapping)(use multithreading)

```python
import threading
import time

print(threading.active_count())
print(threading.enumerate())

def eat_breakfast():
    time.sleep(3)
    print("You eat breakfast")
def drink_coffee():
    time.sleep(4)
    print("You drink coffee")
def study():
    time.sleep(5)
    print("You finish studying")

x=threading.thread(target=eat_breakfast,args=())
x.start()

y=threading.thread(target=drink_coffee,args=())
y.start()

z=threading.thread(target=study,args=())
z.start()

# concurrently and subsequently.
# You may have notice the main thread run first, it's because it don't wait for other.

x.join()
y.join()
z.join()
```
### Daemon threads
A thread that runs in the background, not important for program to run.

Your program will not wait for daemon threads to complete before exiting.

Non - Daemon threads cannot normally be killed, stay alive until task incomplete.

Ex. background tasks, garbage collection, waiting for input, long running processes.

```python
import threading
import time

def timer():
    print()
    count=0
    while True:
        time.sleep(1)
        count+=1
    print("logged in for: ", count,"seconds")

x=threading.thread(target=timer)
x.start()

answer=input("Do you wish to exit? ")
```

So, you can see, you cannot exit the program because it will keep on happening as long as any non-daemon thread is running.

```txt
just change:

x=threading.thread(target=timer,daemon=True)
x.start()
```

Now, the program is stopped because all daemons has been killed!

```txt
x.setDaemon(True)
print(x.isDaemon())

```
### Multiprocessing
Running tasks in parallel on different cpu cores;
bypasses GIL(GIL means 1 thread at a time) used for threading.

multiprocessing=better for cpu bound tasks(heavy cpu usage)

multithreading=better for io bound tasks (waiting around)

```python
from multiprocessing import Process,cpu_count
import time

def main():
    pass
if __name__="__main__""
    main()
```
lets see how long it takes to count from 0 to a billion through 1 processing:
```python
from multiprocessing import Process, cpu_count
import time

def counter(num):
    count=0
    while count<num:
        count+=1
def main():
    a=Process(target=counter,args=(1000000000,))

    a.start()
    a.join()

print("finished in: ",time.perf_counter(),"seconds")
# finished in 56.7325128 seconds
```
```python 
from multiprocessing import Process, cpu_count
import time

def counter(num):
    count=0
    while count<num:
        count+=1
def main():
    a=Process(target=counter,args=(500000000,))
    b=Process(target=counter,args=(500000000,))

    a.start()
    b.start()
    a.join()
    b.join()

print("finished in: ",time.perf_counter(),"seconds")
# finished in 40 seconds
```

similarly, create 4 processes.
27 sec

first check cpu counts as 
print(cpu_count())

4

Now, if you go higher than this than it will hender the cpu processind and take even longer time.


### GUI windows
```python
from tkinter import *
# widgets= GUI elements: buttons, textboxes, Labels, images

# windows= serves as a container to hold or contain these widgets

# let's create a simple window

window=Tk() # instantiate an instance of a window

# let's change the size:
window.geometry("420*420")
window.title("Bro's first GUI")
icon=Photoimage(file='logo.png')
window.iconphoto(True,icon)

window.mainloop() # place window on computer screen, listen for events.

window.config(background="black") # or "#5cfcff"
```
#### Labels
An area widget that holds text and/or an image within a window

```python
from tkinter import *
window=Tk()
label=Label(window,text="Hello world")
label.pack()
window.mainloop()
```
```text
or we can use:
-->Label.place(x=0,y=0)
-->Label=label(window,text="Hello world",font=('Arial',40,'bold'),fg='#5cfcff',bg='Black')

relief=Raised,bd=10 # or SUNKIN

padx=20,pady=20
image=photo,compound='bottom' or 'top'

# write it down, down the window=Tk()
photo=PhotoImage(file='Path')
```
#### buttons
You click it, then it does stuff

```python
def click():
    print("You clicked the button!")
```
```python
from tkinter import *
window=Tk()
button=Button(window,text="click me!",command=click,font=("Comic Sans",30),fg="5#fcff",bg="black",activeforeground="#00ff00",
activebackground="black",state=DISABLED) # or #00f00 or ACTIVE

button.pack()
photo =PhotoImage(file='image.png')
image=photo,compound='bottom'

count=0

def click():
    global count
    count+=1
    print(count)

```

#### Entrybox
Textbox that accepts a single line of user input

```python
from tkinter import *
window=Tk()
entry=Entry(window,font=("Arial",50))
entry.pack() # (side=LEFT)
submit_button=Button(window,text="Submit",command=Submit)
submit_button.pack() # (side=RIGHT)

def Submit():
    ab=entry.get()
    print("Hello"+ab)
    entry.config(state=DISABLED)
delete_button=Button(window,text="delete",command=delete)
delete_button.pack(side=RIGHT)

def delete():
    entry.delete(0,END)

backspace_button=Button(window,text="backspace",command=backspace)
backspace_button.pack(side=RIGHT)

def backspace():
    entry.delete(len(entry.get())-1,END)

# between the constructor, you can customize your window

entry=Entry(window,font=("Arial",50),fg="00ff00",bg="black",show="*")

# let's insert some default texts

entry.insert(0,'Spongebob')
```

#### Checkbox

```python
def display():
    if(x.get()==1):
        print("You agree!")
    else:
        print("You don't agree :( ")
window=Tk()
x=IntVar()
Python_photo=PhotoImage(file='python.png')

check_button=Checkbutton(window,text="I agree to something",variable=x,onvalue=1 # change these two to str,bool etc
,offvalue=0,command=display,font=('Arial',20),fg='00ff00',bg='black',activeforeground="00ff00",activebackground='black',padx=25,pady=10,image=Python_photo,compound='left')
check_button.pack()
window.mainloop()
```
#### Radio button

Similar to checkbox, but you can only select one from a group.

```python
food=["pizza","hamburger","hotdog"]
window=Tk()
x=IntVar()
pizza=PhotoImage(file="pg.png")

for index in range(len(food)):
    radiobutton=Radiobutton(window,text=food(index),variable=x,value=index,padx=25,pady=10,font=('Impact',50),image=foodImages[index],compound='left',indicatoron=0,width=375,command=order)

    radiobutton.pack(anchor=W)
    window.mainloop()
def order():
    if(x.get()==0):
        print("You ordered pizza!")
    elif(x.get()==1):
        print("You ordered hamburger!")
    elif(x.get()==2):
        print("You ordered hotdog!")
    else:
        print("huh??")
```

#### Scale

```python
def submit():
    print(listbox.get(listbox.curselection(1)))

from tkinter import *

def submit():
    print("The temp. is :" + str(Scale.get())+"degree c")

window=Tk()

scale=Scale(window,from_=100,to=0,length=600,orient=HORIZONTAL #or VERTICAL
font=("Arial",20),tickinterval=10,showvalue=0)
scale.pack()

button=Button(window,text="Submit",command=submit)
button.pack()
window.mainloop()

scale.set(((scale['from']-scale['to'])/2)+scale['to'],troughcolor="#69FAFF",fg='#FF1C00',bg='#111111',image=hotImage)
hotImage=PhotoImage(file='hot.png')
hotLabel=label(image=hotImage)
hotLabel.pack()

# do the same with cold.
```

#### Listbox
A listbox is a listing of selectable text items within it's own container.
```python
listbox=Listbox(window,bg="#f7ffde",font=("Constantia",35),width=12)
listbox.pack()
listbox.insert(1,"Pizza")
listbox.insert(2,"Pasta")
listbox.insert(3,"Garlic Bread")
listbox.insert(4,"Soup")
listbox.insert(5,"Salad")

submitButton=Button(window,text="Submit",command=submit)
submitButton.pack()

entryBox=Entry(window)
entryBox.pack()

addButton=Button(window,text="add",command=add)
addButton.pack()

def add():
    listbox.insert(listbox.size(),entryBox.get())
listbox.config(height=listbox.size())

```
```python
# bro also created a delete button.

def delete():
    listbox.delete(listbox.curselection())
    listbox.config(height=listbox.size(),width=12,selectmode=MULTIPLE)
def submit():
    food=[]
    for index in listbox.curselection():
        food.insert(index,listbox.get(index))
    print("You have ordered:")
    for index in food:
        print(index)
def delete():
    for index in reversed(listbox.curselection()):
        listbox.delete(index)
    listbox.config(# "" same
    )
```

#### Messagebox

```python
from tkinter import *
from tkinter import messagebox

def click():
    messagebox.showinfo(title='This is an info message box', message='you are a person')
window=Tk()

button=Button(window,command=click,text='click me')
button.pack()

window.mainloop()

while(True):
    messagebox.showwarning(title='WARNING!', message=' you have A VIRUS!!!')
messagebox.showerror(tittle='ERROR',message='Something went wrong!')

messagebox.askokcancel(# same as above
)
messagebox.askretrycancel(# same
)
messagebox.askyesno(#same
)
messagebox.askquestion(tittle='tittle',message='Do you like pie?')
messagebox.askyesnocancel(#same
)
icon='Warning' # or 'info' or 'error'
```

#### colorchooser

```python
from tkinter import *
from tkinter import colorchooser
# reason for 2nd import is, it is not covered in 1st module, it's a sub module!

window=Tk()
window.geometery(420*420)
button=Button(text='click me', command=click)
button.pack()
window.mainloop()

def click():
    color=colorchooser.askcolor()
    print(color)
    colorHex=color[1]
    print(colorHex)

    window.config(bg=colorHex)

    # or
def click():
    window.config(bg=ColorChooser.askcolor()[1])
```
#### Text area

text widget=functions like a text area, you can enter multiple lines of text

```python
from tkinter import *
def submit():
    input=text.get("1.0",END)
    print(input)
window=Tk()
text=Text(window,bg="light yellow",font=("Ink free",25),height=8,width=20,padx=20,pady=20,fg="purple")
text.pack()
button=Button(window,text="submit",command=submit)
button.pack()
window.mainloop()
```

#### Open a file (file dialog)

```python
from tkinter import *
from tkinter import filedialog
def openfile():
    filepath=filedialog.askopenfilename()
    print(filepath)
window=Tk()
button=Button(text="Open", command=openfile)
button.pack()
window.mainloop()
```
```python
file=open(filepath,'r')
print(file.read())
file.close()

initialdir=" absoulte path",tittle="Open file Okay?", filetype=_(("text files", "*.txt"),("all files", "*.*"))
```

#### Save a file (file dialog)
```python
from tkinter import *
from tkinter import filedialog

def savefile():
    file=filedialog.asksaveasfile(defaultextension='.txt',filetypes=[("Text file",".txt"), ("HTML file", ".html",".*"),])

    filetext=str(text.get(1.0,END))
    file.write(filetext)
    file.close()

window=Tk()
button=Button(text='save',command=savefile)
button.pack()
text=Text(window)
text.pack()

window.mainloop()
initialdir="file path",#same
filetext=input("Enter some text here: ")
if file is None: # what it does?
    return
```

#### Menubar
```python
from tkinter import *
from tkinter import filedialog
window=Tk()
menubar=Menu(window)
window.config(menu=menubar,tearoff=0)
filemenu=Menu(menubar)
menubar.add_cascade(label="file",menu=filemenu)
filemenu.add_command(label="open")
filemenu.add_command(label="save")
filemenu.add_command(label="exit")
window.mainloop()
filemenu.add_separator()
filemenu.add_separator(lable="save",command=openfile)
filemenu.add_separator(lable="Exit",command=quit)
def openfile():
    print("File has been Open")
def savefile():
    print("File has been saved!")
editmenu=Menu(menubar,tearoff=0)
menubar.add_cascade(label="Edit",menu=editmenu)

# same code! , just make cut copy paste!
editmenu=Menu(menubar,tearoff=0,font=("MV Boli",15))
```
```python
openImage=PhotoImage(file="file.png")
saveImage=PhotoImage(file="file.png")
exitImage=PhotoImage(file="file.png")

filemenu.add_command(label="open",command=openfile,image=openImage,compound='left')
filemenu.add_command(label="save",command=savefile,image=saveImage,compound='left')
filemenu.add_command(label="Exit",command=exitfile,image=exitImage,compound='left')
```
#### Frames
A rectangular container to group and hold widgets

```python
Buttom(window,text="W",font=("Consolas",25),width=3).pack(side=TOP)
Buttom(window,text="A",font=("Consolas",25),width=3).pack(side=LEFT)
Buttom(window,text="S",font=("Consolas",25),width=3).pack(side=LEFT)
Buttom(window,text="D",font=("Consolas",25),width=3).pack(side=LEFT)
```
```python
frame=Frame(window,bg="pink",bd=5,relief=RAISED).pack() # RAISED OR SUNKEN
frame.pack(side=BOTTOM) 
# or
frame.place(x=0,y=0)
```

#### New windows
We can create a window in two ways 

1st by:

```python
def create_window():
    new_window=Tk()
```
```python
def create_window():
    new_window=Toplevel()
    # this is a new window 'on top' of other windows, liked to a 'bottom' window
    # Tk() = new independent window
```
#### Window Tabs
```python
from tkinter import *
from tkinter import ttk

window=Tk()

notebook=ttk.Notebook(window)
# windget that manages a collection of windows/displays

tab1=Frame(notebook)
# new frame for tab1
tab2=Frame(notebook)
# new frame for tab2

notebook.add(tab1,text="Tab1")
notebook.add(tab2,text="Tab2")
notebook.pack()
label(tab1,text="Hello, this is tab1",width=50,height=25).pack()
label(tab2,text="Goodbye, this is tab2",width=50,height=25).pack()

window.mainloop()
```
```python
notebook.pack(expand=True,fill="both")
# expand will fill any space not otherwise used and fill will fill space on x and y axis
```
#### Grid
Geometery manager taht organizes widgets in a table-like structure in a parent.
```text
grid=rows and column
```

```python
window=Tk()
firstNameLabel=label(window,text="first.name:").pack()
firstNameEntry=Entry(window).pack()
# now replace .pack() by grid(row=0,coloumn=0)
```
```python
firstNameEntry=Entry(window).grid(row=0,column=1)
# Add, lastNameLabel & entry 
# Add, emailLabel & entry 

submitButton=Button(window,text="submit").grid(row=3,column=0,columnspan=2)

# On top of the firstNameLabel:
titlelabel=label(window,text="Enter your info",font=("Arial",25)).grid(row=0,column=0,columnspan=2)
```

#### Progress bar
```python
from tkinter import *
from tkinter import ttk
import time

def start():
    tasks=10
    x=0
    while(x<tasks):
        time.sleep(1)
        bar['value']+=10
        x+=1
        percent.set(str(int((x/tasks)*100))+"%")
        text.set(str(x)+"/"+str(tasks)+"tasks completed")
    window.update_idletasks()
window=Tk()
percent=Stringvar()
text=Stringvar()
bar=Progressbar(window,orient=HORIZONTAL,length=300)
bar.pack(pady=10)
percentlabel=label(window,textvariable=percent).pack()
taskvariable=label(window,textvariable=text).pack()
button=Button(window,text="download",command=start).pack()
window.mainloop()
```
```python
def start():
    GB=100
    download=0
    speed=1
    while(download<GB):
        time.sleep(0.05)
        bar['value']+=(speed/GB)*100
        download+=speed
        percent.set(str(int((download/GB)*100))+"%")
        text.set(str(download)+"/" +str(GB)+"GB completed")
        window.update_idletasks()
```

#### Canvas
Widget that is used to draw graphs, plots, images in a window.

```python
from tkinter import *
window=Tk()
canvas=Canvas(window,height=500,width=500)
canvas.create_line(0,0,500,500,fill="blue",width=5)
canvas.create_line(0,500,500,0,fill="red",width=5)
canvas.create_rectangle(50,50,250,250,fill="purple")
canvas.create_polygon(250,0,500,500,0,500,fill="yellow",outline="black",width=5)

# instead of passing these coordinates, we can also do:
# points=[250,0,500,500,0,500]
canvas.create_polygon(points,fill="yellow",outline="black",width=5)
```
```python
canvas.create_arc(0,0,500,500,fill="green",style=CHORD,start=90,extent=180)
# style=CHORD or ARC or PIESLICE and start=90 or 180 or 270
canvas.create_arc(0,0,500,500,fill="red",extent=180,width=10)
canvas.create_arc(0,0,500,500,fill="white",extent=180,start=180,width=10)
canvas.create_oval(190,190,310,310,fill="white",width=10)
```

```python
# Create Simple Pokiball program
```
#### Keyboard events

```python
from tkinter import *
def dosomething(event):
    print("You did a thing")
window = Tk()
window.bind("<Return>",dosomething) # "<Key>"
window.mainloop() 
```
```python
from tkinter import *
def dosomething(event):
    print("You pressed: " + event.keysym)
window=Tk()
window.bind("<Key>",dosomething)
# here next code written
window.mainloop()
```
```python
label=label(window,font=("Helvetica",100)).pack()
def dosomething(event):
    label.config(text=event.keysym)
```

#### Mouse events
In the last session, we saw how we can bind a widget or a window so that when a certain event occurs, we can call a function.

```python
def dosome(event):
    print("You did a thing!")
window=Tk()
window.bind("<Button-1>", dosome)
window.bind("<Button-2>", dosome)
window.bind("<Button-3>", dosome)
window.mainloop()

def dosome(event):
    print("Mouse Coordinates:" + str(event.x)+","+str(event.y))
#<ButtonRelease>
#<Enter>
#<Leave>
#<Motion>
```


#### Drag and Drop
```Python
def drag_start(event):
    label.startX=event.x
    label.startY=event.y
def drag_motion(event):
    x=label.winfo_x()-label.startX+event.x
    y=label.winfo_y()-label.startY+event.y
    label.place(x=x,y=y)
window=Tk()
label=Label(window,bg="red",width=10,height=5)
label.place(x=0,y=0)
label.bind("<Button-1>",drag_start)
label.bind("<B1-Motion>",drag_motion)
# bro just created another label here!
```

#### Move images w/ keys

```Python
from tkinter import *
def move_up(event):
    label.place(x=label.winfo-x(),y=label.winfo_y()-10)
def move_down(event):
    label.place(x=label.winfo-x(),y=label.winfo_y()+10)
def move_left(event):
    label.place(x=label.winfo-x()-10,y=label.winfo_y())
def move_right(event):
    label.place(x=label.winfo-x()+10,y=label.winfo_y()+10)
window=Tk()
window=geometery("500*500")
window.bind("<W>",move_up)
window.bind("<S>",move_down)
window.bind("<A>",move_left)
window.bind("<D>",move_right)
myimage=PhotoImage(file='racecar.png')
label=Label(window,image=myimage)
label.place(x=0,y=0)
window.mainloop()
```

#### Move images on a canvas

```Python
from tkinter import *
def move_up(event):
    Canvas.move(myimage,0,-10)
def move_down(event):
    Canvas.move(myimage,0,10)
def move_left(event):
    Canvas.move(myimage,-10,0)
def move_right(event):
    Canvas.move(myimage,10,0)
window=Tk()
window.bind("<W>",move_up)
window.bind("<S>",move_down)
window.bind("<A>",move_left)
window.bind("<D>",move_right)
Canvas=Canvas(window,width=500,height=500)
Canvas.pack()
photoimage=PhotoImage(file='racecar.png')
myimage=Canvas.create_image(0,0,image=photoimage,anchor=NW)
window.mainloop()
```

#### Animations

```Python
from tkinter import *
import time

WIDTH=500
HEIGHT=500
xVelocity=1 # later, change it to 3
yVelocity=1 # later, change it to 2 to spice things up!

window=Tk()

canvas=Canvas(window,width=WIDTH,height=HEIGHT)
canvas.pack()

photo_image=PhotoImage(file='ufo.png')
my_image=canvas.create_image(0,0,image=photo_image,anchor=NW)
```
Add background image:

```Python
image_width=photo_image.width()
image_height=photo_image.height()
while True:
    coordinates=canvas.coords(my_image)
    print(coordinates)
    if(coordinates[0]>=WIDTH-image_width) or (coordinates[0]<0):
        xVelocity=-xVelocity
    if(coordinates[1]>=HEIGHT-image_height) or (coordinates[1]<0):
        yVelocity=-yVelocity
    
    canvas.move(my_image,xVelocity,yVelocity)
    window.update()
    time.sleep(0.01)
```

#### Multiple animations

In different module, create balls.py file:

```Python
class Ball:
    def __init__(self,canvas,x,y,diameter,xVelocity,yVelocity,color):
        self.canvas=canvas
        self.image=canvas.create_oval(x,y,diameter,diameter,fill=color)
        self.xVelocity=xVelocity
        self.yVelocity=yVelocity
    
    def move(self):
        coordinates=self.canvas.coords(self.image)
        print(coordinates)

        self.canvas.move(self.image,self.xVelocity,self.yVelocity)
```

Create a new ball as:

```Python
tennis_ball=Ball(canvas,0,0,50,4,3,"yellow")
tennis_ball.move()
```

```Python
from tkinter import *
from ball import *
import time

WIDTH=500
HEIGHT=500

canvas=Canvas(window,width=WIDTH,height=HEIGHT)
canvas.pack()

volley_ball=Ball(canvas,0,0,100,1,1,"white")

while True:
    volley_ball.move()
    window.update()
    time.sleep(0.01)
    
    if(coordinates[2]>=(self.canvas.winfo_width()) or coordinates[0]<0):
        self.xVelocity=-self.xVelocity
    if(coordinates[3]>=(self.canvas.winfo_width()) or coordinates[1]<0):
        self.yVelocity=-self.yVelocity
```

#### Clock Program

```Python
from tkinter import *
from time import *

def update():
    time_string = strftime("%I:%M:%S %p")
    time_label.config(text=time_string)

    day_string = strftime("%A")
    day_label.config(text=day_string)

    date_string = strftime("%B %d, %Y")
    date_label.config(text=date_string)

    window.after(1000,update)


window = Tk()

time_label = Label(window,font=("Arial",50),fg="#00FF00",bg="black")
time_label.pack()

day_label = Label(window,font=("Ink Free",25,"bold"))
day_label.pack()

date_label = Label(window,font=("Ink Free",30))
date_label.pack()

update()

window.mainloop()
```
#### Send an Email
```python
# ****************************************************************
# Python email
# ****************************************************************
import smtplib

sender = "sender@gmail.com"
receiver = "receiver@gmail.com"
password = "password123"
subject = "Python email test"
body = "I wrote an email! :D"

# header
message = f"""From: Snoop Dogg{sender}
To: Nicholas Cage{receiver}
Subject: {subject}\n
{body}
"""

server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()

try:
    server.login(sender,password)
    print("Logged in...")
    server.sendmail(sender, receiver, message)
    print("Email has been sent!")

except smtplib.SMTPAuthenticationError:
    print("unable to sign in")
```
#### Run with command prompt

```python
# *****************************
# run .py file with cmd
# *****************************
# save file as .py (Python file)
# go to command prompt
# navigate to directory w/ your file: cd C:\Users\BroCode\Desktop
# invoke python interpreter + script: python hello_world.py

print("Hello World!")

name = input("What's your name?: ")

print("Hello "+name)
# *****************************
```

#### Pip

```txt

# ****************************************************************
# Python pip
# ****************************************************************
#       pip = package manager for packages and modules from Python Package Index
#
#       included for Python versions 3.4+
#       open command prompt
#
#       help:                                          pip
#       check:                                       pip --version
#       update:                                     pip install --upgrade pip
#       installed packages:                pip list
#       check outdated packages:    pip list --outdated
#       update a package:                  pip install "package name" --upgrade
#       install a package:                    pip install "package name"
# ****************************************************************
```

#### .py to exe executable

```txt
(Windows Defender may prevent you from running)
(make sure pip and pyinstaller are installed/updated)

1. cd to directory that contains your .py file
2. pyinstaller ...
  -F   (all in 1 file)
  -w   (removes terminal window)
  -i icon.ico  (adds custom icon to .exe)
  clock.py  (name of your main python file)

3. exe is located in the dist folder

```

.exe is located in the dist folder.

ico convert.com

-->pyinstaller -F -W -i icon.ico clock.py(enter!)

### Programs

#### Calculator program

```python
# ****************************************************************
# Python Calculator
# ****************************************************************
from tkinter import *

def button_press(num):

    global equation_text

    equation_text = equation_text + str(num)

    equation_label.set(equation_text)

def equals():

    global equation_text

    try:

        total = str(eval(equation_text))

        equation_label.set(total)

        equation_text = total

    except SyntaxError:

        equation_label.set("syntax error")

        equation_text = ""

    except ZeroDivisionError:

        equation_label.set("arithmetic error")

        equation_text = ""

def clear():

    global equation_text

    equation_label.set("")

    equation_text = ""


window = Tk()
window.title("Calculator program")
window.geometry("500x500")

equation_text = ""

equation_label = StringVar()

label = Label(window, textvariable=equation_label, font=('consolas',20), bg="white", width=24, height=2)
label.pack()

frame = Frame(window)
frame.pack()

button1 = Button(frame, text=1, height=4, width=9, font=35,
                 command=lambda: button_press(1))
button1.grid(row=0, column=0)

button2 = Button(frame, text=2, height=4, width=9, font=35,
                 command=lambda: button_press(2))
button2.grid(row=0, column=1)

button3 = Button(frame, text=3, height=4, width=9, font=35,
                 command=lambda: button_press(3))
button3.grid(row=0, column=2)

button4 = Button(frame, text=4, height=4, width=9, font=35,
                 command=lambda: button_press(4))
button4.grid(row=1, column=0)

button5 = Button(frame, text=5, height=4, width=9, font=35,
                 command=lambda: button_press(5))
button5.grid(row=1, column=1)

button6 = Button(frame, text=6, height=4, width=9, font=35,
                 command=lambda: button_press(6))
button6.grid(row=1, column=2)

button7 = Button(frame, text=7, height=4, width=9, font=35,
                 command=lambda: button_press(7))
button7.grid(row=2, column=0)

button8 = Button(frame, text=8, height=4, width=9, font=35,
                 command=lambda: button_press(8))
button8.grid(row=2, column=1)

button9 = Button(frame, text=9, height=4, width=9, font=35,
                 command=lambda: button_press(9))
button9.grid(row=2, column=2)

button0 = Button(frame, text=0, height=4, width=9, font=35,
                 command=lambda: button_press(0))
button0.grid(row=3, column=0)

plus = Button(frame, text='+', height=4, width=9, font=35,
                 command=lambda: button_press('+'))
plus.grid(row=0, column=3)

minus = Button(frame, text='-', height=4, width=9, font=35,
                 command=lambda: button_press('-'))
minus.grid(row=1, column=3)

multiply = Button(frame, text='*', height=4, width=9, font=35,
                 command=lambda: button_press('*'))
multiply.grid(row=2, column=3)

divide = Button(frame, text='/', height=4, width=9, font=35,
                 command=lambda: button_press('/'))
divide.grid(row=3, column=3)

equal = Button(frame, text='=', height=4, width=9, font=35,
                 command=equals)
equal.grid(row=3, column=2)

decimal = Button(frame, text='.', height=4, width=9, font=35,
                 command=lambda: button_press('.'))
decimal.grid(row=3, column=1)

clear = Button(window, text='clear', height=4, width=12, font=35,
                 command=clear)
clear.pack()

window.mainloop()

# ****************************************************************
```
#### Text editor program

```python
import os
from tkinter import *
from tkinter import filedialog, colorchooser, font
from tkinter.messagebox import *
from tkinter.filedialog import *


def change_color():
    color = colorchooser.askcolor(title="pick a color...or else")
    text_area.config(fg=color[1])


def change_font(*args):
    text_area.config(font=(font_name.get(), size_box.get()))


def new_file():
    window.title("Untitled")
    text_area.delete(1.0, END)


def open_file():
    file = askopenfilename(defaultextension=".txt",
                           file=[("All Files", "*.*"),
                                 ("Text Documents", "*.txt")])

    if file is None:
        return

    else:
        try:
            window.title(os.path.basename(file))
            text_area.delete(1.0, END)

            file = open(file, "r")

            text_area.insert(1.0, file.read())

        except Exception:
            print("couldn't read file")

        finally:
            file.close()


def save_file():
    file = filedialog.asksaveasfilename(initialfile='unititled.txt',
                                        defaultextension=".txt",
                                        filetypes=[("All Files", "*.*"),
                                                   ("Text Documents", "*.txt")])

    if file is None:
        return

    else:
        try:
            window.title(os.path.basename(file))
            file = open(file, "w")

            file.write(text_area.get(1.0, END))

        except Exception:
            print("couldn't save file")

        finally:
            file.close()


def cut():
    text_area.event_generate("<<Cut>>")


def copy():
    text_area.event_generate("<<Copy>>")


def paste():
    text_area.event_generate("<<Paste>>")


def about():
    showinfo("About this program", "This is a program written by YOUUUUU!!!")


def quit():
    window.destroy()


window = Tk()
window.title("Text editor program")
file = None

window_width = 500
window_height = 500
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()

x = int((screen_width / 2) - (window_width / 2))
y = int((screen_height / 2) - (window_height / 2))

window.geometry("{}x{}+{}+{}".format(window_width, window_height, x, y))

font_name = StringVar(window)
font_name.set("Arial")

font_size = StringVar(window)
font_size.set("25")

text_area = Text(window, font=(font_name.get(), font_size.get()))

scroll_bar = Scrollbar(text_area)
window.grid_rowconfigure(0, weight=1)
window.grid_columnconfigure(0, weight=1)
text_area.grid(sticky=N + E + S + W)
scroll_bar.pack(side=RIGHT, fill=Y)
text_area.config(yscrollcommand=scroll_bar.set)

frame = Frame(window)
frame.grid()

color_button = Button(frame, text="color", command=change_color)
color_button.grid(row=0, column=0)

font_box = OptionMenu(frame, font_name, *font.families(), command=change_font)
font_box.grid(row=0, column=1)

size_box = Spinbox(frame, from_=1, to=100, textvariable=font_size, command=change_font)
size_box.grid(row=0, column=2)

menu_bar = Menu(window)
window.config(menu=menu_bar)

file_menu = Menu(menu_bar, tearoff=0)
menu_bar.add_cascade(label="File", menu=file_menu)
file_menu.add_command(label="New", command=new_file)
file_menu.add_command(label="Open", command=open_file)
file_menu.add_command(label="Save", command=save_file)
file_menu.add_separator()
file_menu.add_command(label="Exit", command=quit)

edit_menu = Menu(menu_bar, tearoff=0)
menu_bar.add_cascade(label="Edit", menu=edit_menu)
edit_menu.add_command(label="Cut", command=cut)
edit_menu.add_command(label="Copy", command=copy)
edit_menu.add_command(label="Paste", command=paste)

help_menu = Menu(menu_bar, tearoff=0)
menu_bar.add_cascade(label="Help", menu=help_menu)
help_menu.add_command(label="About", command=about)

window.mainloop()
```

#### Tic Tac Toe game

```python
# ********************************************************
# Python Tic Tac Toe game
# ********************************************************

from tkinter import *
import random

def next_turn(row, column):

    global player

    if buttons[row][column]['text'] == "" and check_winner() is False:

        if player == players[0]:

            buttons[row][column]['text'] = player

            if check_winner() is False:
                player = players[1]
                label.config(text=(players[1]+" turn"))

            elif check_winner() is True:
                label.config(text=(players[0]+" wins"))

            elif check_winner() == "Tie":
                label.config(text="Tie!")

        else:

            buttons[row][column]['text'] = player

            if check_winner() is False:
                player = players[0]
                label.config(text=(players[0]+" turn"))

            elif check_winner() is True:
                label.config(text=(players[1]+" wins"))

            elif check_winner() == "Tie":
                label.config(text="Tie!")

def check_winner():

    for row in range(3):
        if buttons[row][0]['text'] == buttons[row][1]['text'] == buttons[row][2]['text'] != "":
            buttons[row][0].config(bg="green")
            buttons[row][1].config(bg="green")
            buttons[row][2].config(bg="green")
            return True

    for column in range(3):
        if buttons[0][column]['text'] == buttons[1][column]['text'] == buttons[2][column]['text'] != "":
            buttons[0][column].config(bg="green")
            buttons[1][column].config(bg="green")
            buttons[2][column].config(bg="green")
            return True

    if buttons[0][0]['text'] == buttons[1][1]['text'] == buttons[2][2]['text'] != "":
        buttons[0][0].config(bg="green")
        buttons[1][1].config(bg="green")
        buttons[2][2].config(bg="green")
        return True

    elif buttons[0][2]['text'] == buttons[1][1]['text'] == buttons[2][0]['text'] != "":
        buttons[0][2].config(bg="green")
        buttons[1][1].config(bg="green")
        buttons[2][0].config(bg="green")
        return True

    elif empty_spaces() is False:

        for row in range(3):
            for column in range(3):
                buttons[row][column].config(bg="yellow")
        return "Tie"

    else:
        return False


def empty_spaces():

    spaces = 9

    for row in range(3):
        for column in range(3):
            if buttons[row][column]['text'] != "":
                spaces -= 1

    if spaces == 0:
        return False
    else:
        return True

def new_game():

    global player

    player = random.choice(players)

    label.config(text=player+" turn")

    for row in range(3):
        for column in range(3):
            buttons[row][column].config(text="",bg="#F0F0F0")


window = Tk()
window.title("Tic-Tac-Toe")
players = ["x","o"]
player = random.choice(players)
buttons = [[0,0,0],
           [0,0,0],
           [0,0,0]]

label = Label(text=player + " turn", font=('consolas',40))
label.pack(side="top")

reset_button = Button(text="restart", font=('consolas',20), command=new_game)
reset_button.pack(side="top")

frame = Frame(window)
frame.pack()

for row in range(3):
    for column in range(3):
        buttons[row][column] = Button(frame, text="",font=('consolas',40), width=5, height=2,
                                      command= lambda row=row, column=column: next_turn(row,column))
        buttons[row][column].grid(row=row,column=column)

window.mainloop()

# ********************************************************
```

#### Snake game

```python
# ************************************
# Python Snake
# ************************************
from tkinter import *
import random

GAME_WIDTH = 700
GAME_HEIGHT = 700
SPEED = 50
SPACE_SIZE = 50
BODY_PARTS = 3
SNAKE_COLOR = "#00FF00"
FOOD_COLOR = "#FF0000"
BACKGROUND_COLOR = "#000000"


class Snake:

    def __init__(self):
        self.body_size = BODY_PARTS
        self.coordinates = []
        self.squares = []

        for i in range(0, BODY_PARTS):
            self.coordinates.append([0, 0])

        for x, y in self.coordinates:
            square = canvas.create_rectangle(x, y, x + SPACE_SIZE, y + SPACE_SIZE, fill=SNAKE_COLOR, tag="snake")
            self.squares.append(square)


class Food:

    def __init__(self):

        x = random.randint(0, (GAME_WIDTH / SPACE_SIZE)-1) * SPACE_SIZE
        y = random.randint(0, (GAME_HEIGHT / SPACE_SIZE) - 1) * SPACE_SIZE

        self.coordinates = [x, y]

        canvas.create_oval(x, y, x + SPACE_SIZE, y + SPACE_SIZE, fill=FOOD_COLOR, tag="food")


def next_turn(snake, food):

    x, y = snake.coordinates[0]

    if direction == "up":
        y -= SPACE_SIZE
    elif direction == "down":
        y += SPACE_SIZE
    elif direction == "left":
        x -= SPACE_SIZE
    elif direction == "right":
        x += SPACE_SIZE

    snake.coordinates.insert(0, (x, y))

    square = canvas.create_rectangle(x, y, x + SPACE_SIZE, y + SPACE_SIZE, fill=SNAKE_COLOR)

    snake.squares.insert(0, square)

    if x == food.coordinates[0] and y == food.coordinates[1]:

        global score

        score += 1

        label.config(text="Score:{}".format(score))

        canvas.delete("food")

        food = Food()

    else:

        del snake.coordinates[-1]

        canvas.delete(snake.squares[-1])

        del snake.squares[-1]

    if check_collisions(snake):
        game_over()

    else:
        window.after(SPEED, next_turn, snake, food)


def change_direction(new_direction):

    global direction

    if new_direction == 'left':
        if direction != 'right':
            direction = new_direction
    elif new_direction == 'right':
        if direction != 'left':
            direction = new_direction
    elif new_direction == 'up':
        if direction != 'down':
            direction = new_direction
    elif new_direction == 'down':
        if direction != 'up':
            direction = new_direction


def check_collisions(snake):

    x, y = snake.coordinates[0]

    if x < 0 or x >= GAME_WIDTH:
        return True
    elif y < 0 or y >= GAME_HEIGHT:
        return True

    for body_part in snake.coordinates[1:]:
        if x == body_part[0] and y == body_part[1]:
            return True

    return False


def game_over():

    canvas.delete(ALL)
    canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2,
                       font=('consolas',70), text="GAME OVER", fill="red", tag="gameover")


window = Tk()
window.title("Snake game")
window.resizable(False, False)

score = 0
direction = 'down'

label = Label(window, text="Score:{}".format(score), font=('consolas', 40))
label.pack()

canvas = Canvas(window, bg=BACKGROUND_COLOR, height=GAME_HEIGHT, width=GAME_WIDTH)
canvas.pack()

window.update()

window_width = window.winfo_width()
window_height = window.winfo_height()
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()

x = int((screen_width/2) - (window_width/2))
y = int((screen_height/2) - (window_height/2))

window.geometry(f"{window_width}x{window_height}+{x}+{y}")

window.bind('<Left>', lambda event: change_direction('left'))
window.bind('<Right>', lambda event: change_direction('right'))
window.bind('<Up>', lambda event: change_direction('up'))
window.bind('<Down>', lambda event: change_direction('down'))

snake = Snake()
food = Food()

next_turn(snake, food)

window.mainloop()
```