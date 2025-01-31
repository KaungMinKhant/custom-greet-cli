
## 🚀 **Custom Greet CLI**
**A customizable greeting CLI tool written in TypeScript.**  

🎉 **Features:**  
✅ Supports **formal & casual greetings**  
✅ Add **color** to output (red, green, blue)  
✅ Supports **shouting (UPPERCASE)**  
✅ **Reverse text** before printing  
✅ **Repeat message multiple times**  
✅ **Add emojis** 😎 👔  
✅ **Save greeting to a file**  
✅ **Delay output printing**  

---

## 📌 **Installation**
Install globally via npm:  
```sh
npm install -g custom-greet-cli
```
Now you can run:  
```sh
greet --name=Kaung --age=25
```

---

## 🔥 **Usage & Examples**

### **Basic Greeting**
```sh
greet --name=Kaung --age=25
```
📌 **Output:**  
```
Hey Kaung! You’re 25 years old!
```

### **Formal Greeting**
```sh
greet --name=Kaung --age=25 --greetType=formal
```
📌 **Output:**  
```
Good day, Mr./Ms. Kaung. You are 25 years old.
```

### **Shouting Mode**
```sh
greet --name=Kaung --age=25 --shout
```
📌 **Output:**  
```
HEY KAUNG! YOU’RE 25 YEARS OLD!
```

### **Reverse the Message**
```sh
greet --name=Kaung --age=25 --reverse
```
📌 **Output:**  
```
!dlo sraey 52 er’uoy !gntiaK yeh
```

### **Add Colors**
```sh
greet --name=Kaung --age=25 --color=red
```
📌 **Output:** (Printed in **red**)  
```
Hey Kaung! You’re 25 years old!
```

### **Add Emoji**
```sh
greet --name=Kaung --age=25 --emoji
```
📌 **Output:**  
```
Hey Kaung! You’re 25 years old! 😎
```

### **Save Output to a File**
```sh
greet --name=Kaung --age=25 --save
```
📌 **Saves output to:** `message.txt`  
```
Hey Kaung! You’re 25 years old!
```

### **Delay Output**
```sh
greet --name=Kaung --age=25 --delay=1000 --repeat=3
```
📌 **Output (Prints message every 1 second, 3 times)**  
```
Hey Kaung! You’re 25 years old!  
(wait 1 sec)  
Hey Kaung! You’re 25 years old!  
(wait 1 sec)  
Hey Kaung! You’re 25 years old!  
```

---

## ⚙️ **CLI Options**
| Option       | Alias | Type      | Description                             | Default |
|-------------|-------|----------|-----------------------------------------|---------|
| `--name`    | `-n`  | string   | Your name                              | Required |
| `--age`     | `-a`  | number   | Your age                               | Required |
| `--greetType` | `-g`  | string   | Greeting type (`formal` or `casual`)  | `casual` |
| `--shout`   | `-s`  | boolean  | Shout in UPPERCASE                     | `false` |
| `--reverse` | `-rev` | boolean  | Reverse text                           | `false` |
| `--color`   | `-c`  | string   | Color output (`red`, `green`, `blue`) | None |
| `--emoji`   | `-e`  | boolean  | Append emoji (😎 or 👔)               | `false` |
| `--repeat`  | `-r`  | number   | Repeat the message                     | `1` |
| `--delay`   | `-d`  | number   | Delay in milliseconds between messages | `0` |
| `--save`    | `-s`  | boolean  | Save message to `message.txt`          | `false` |

---

## 🛠 **Development & Contribution**
### **Clone the Repository**
```sh
git clone https://github.com/KaungMinKhant/custom-greet-cli.git
cd custom-greet-cli
```

### **Install Dependencies**
```sh
npm install
```

### **Run Locally**
```sh
npm run start -- --name=Kaung --age=25
```

### **Build & Compile**
```sh
npm run build
```

### **Test the CLI Globally**
```sh
npm link
greet --name=Kaung --age=25
```

### **Unlink CLI**
```sh
npm unlink -g custom-greet-cli
```

---


## 🔥 **Author & License**
- **Author:** [Kaung Min Khant](https://github.com/KaungMinKhant)
- **License:** MIT

💡 **Have suggestions or found a bug?** Feel free to open an **issue** or a **pull request**! 🚀  