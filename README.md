# Welcome to Our WebSite

This project was Tailwind with [Clear-Pixel](https://camera-alpha.vercel.app/).

## Uses Plugin
=> DaisyUi
=> Flowbite




### website Featured

=> ReUses Camera Sell
=> you Can Buy Product
=> can you sell your won Product(camera)


### Seller Options
=> seller can add product
=> any added product seller can delete
=>  product you can see your all products
=> also Advertised your products


### Buyer Options

=> buyer can Buy any product
=> card payment system
=> you can see your won booked product

### Login System
=> signUp (email, password)
=> google Login system



{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@now/node"
      }
    ],
    "routes": [
      {
        
        "src": "/(.*)",
        "dest": "index.js"
      }
    ]
  }

git init
git add . 
git commit -m "added"
git branch -M main
git remote add origin  <YOUR_GITHUB_REPO_LINK>
git push -u origin main -f