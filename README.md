# S19_Nextjs_Blog_Website
A skeloton project for building a clean, 3-page personal blog website using Next.js.
I use this for my personal blog website, see [www.arthurqiangli.com].

## 1. What is it?
It is a blog website template project which you can easily use.

![effect](./90-documents/Screenshot%20from%202025-03-01%2023-16-14.png)

## 2. How to use it?
It's very easy, but it will require some web development skills if you want to make any changes.

Steps:
1. The project code is in `Release-V1` directory. run:
   
   ```cd Release-V1``` 
   
   and install all the dependencies using  <br>
   `npm install`.
2. Run <br> `npm run dev` <br> to see the effect while writing your blogs
3. Optionally, run <br> `npm run export` <br> to generate the static website files for deployment to a server.

## 3. How it works?


- The website is written with [NextJS](https://nextjs.org/) which is quite similar to ReactJS for this static website application. 
- All the blog articles are written in [MDX format](https://mdxjs.com/) , which is an advanced [Markdown format](https://www.markdownguide.org/). 
- The style of the website is heavily refered to [Github](https://github.com/ArthurQiangLi) website, becasue I like the concise theme. 


## 4. Known issues:

1. The webpage may not display properly when the window width is less than 1000px.  
2. The readability on a phone screen is not very user-friendly.  
3. The article counter is a static number for now. It should be automatically calculated.