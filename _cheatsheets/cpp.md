---
date: July 6, 2020
title: C++ cheatsheet
---

## Standard libraries

```c++
#include <iostream>
#include <string>
```

## Input/Ouput

```c++
std::cout << "Hello world!" << std::endl;
std::cin >> name;
```

## String functions

```c++
// empty string
std::string str;
// initialize string with string literal
std::string str = "Hello world";
// initialize string with array of characters
std::string str(5, '-');
// compare strings
str1 == str2
// length of string
std::string::size_type len = str.size();
```

## Type casting

```c++
// string to integer
string str = '5';
int num = std::stoi(str);
```

## Using-declarations
```c++
using std::cin;
using std::cout;
using std::string;
```

## Type definitions
```c++
typedef std::string::size_type size_type;
```
