---
title: "JavaScript, The Building Blocks"
date: "2019-07-03"
template: "post"
slug: "JavaScript The Building Blocks"
tags: ["javascript", "fundamentals"]
---

I realized this pretty late it feels, the value in being able to share the things you've learned. I'm still not so great at it; I'm sure the more you read, the plainer it'll be. But i've noticed from those that get it done well, how it seems to enrich everything it touches. I kinda want that.

> <em>"We must leave freedom for the mind to wander about in trying to solve the problems…. The successful user of mathematics is practically an inventor of new ways of obtaining answers in given situations. Even if the ways are well known, it is usually much easier for him to invent his own way— a new way or an old way— than it is to try to find it by looking it up."
> <cite>--Richard Feynman</cite></em>

## Bits

---

At the smallest scale in the computer, information is stored as bits. The bit works similarly to decimal numbers but instead of 10 different digits, it has only 2, and the weight of each increases by a factor of 2 from right to left.

<br />
<figure style="text-align: center;">
    <img style="margin:0;" src="https://media.giphy.com/media/VD5OUTaiFWsF1cp9Wl/giphy.gif#bit-counter">
    <figcaption style="font-style:italic;">source - Mathmo14159</figcaption>
</figure>

- Computers manipulate data in bytes
- There are eight bits in one byte e.g. 0 1 0 1 1 0 1 0.
- n bits yields 2^n patterns, so it follows 8 bits can make 256 patterns and one byte can hold a number between 0 and 255
- One byte can store one character, e.g. 'A' or '7' or '\$'

## Comments

---

A comment is a note written in the code source with the purpose of explaing the code.

```javascript
// This is a single line comment.

/* This comment
    can span multiple lines. */

// var helloJavascript; this code has no function, because it has been "commented out".
```

## Values and Types

---

In the JavaScript environment, a value is any meaningful chunk of bytes. There are 7 basic vlaue types in JavaScript.

```javascript
// number represents numbers of any kind,integer or floating-point
var number = 0

/* string for representing text. Single quotes, double quotes and backticks
 are used to mark strings */
var string = "and away we go"

var happy = true // a boolean is a value that is either true
var sad = false // or false

// null for unknown values
var doesSheLikeMe = null
```

## Variables

---

Variables, also called bindings, are containers used to store data. A variable is basically like a box and you can store just about anything in it - not just strings and numbers, but also complex data and even entire functions. There are three kinds of variable declarations in JavaScript.

- <span style="color:#07a;">let</span> is a block-scoped, local variable declaration.
- <span style="color:#07a;">const</span> is like <span style="color:#07a;">let</span>, but the value of the variable cannot be changed.
- <span style="color:#07a;">var</span> is considered an old-school variable declaration, normally we don't use it at all.

```javascript
var greeting = "Hello" // Variable is declared and assigned a value.
```

Theres a difference between assigning a variable and declaring one.

```javascript
var Daphne // here we are just declaring a variable,it is uninitialized.
var Ian = "not a sucka" // here we are assigning and declaring a variable.

Daphne = "sucka"

console.log(daphne)
// sucka
```

Variable names are case sensitive, that means capitilization matters. We usually use camelCase for multi-word names

```javascript
var properCamelCase
```

A variable cannot be any of the words already used as functions in the JS language. <a href="https://www.w3schools.com/js/js_reserved.asp" target="_blank">List of reserved JavaScript names.</a>

### Operators
