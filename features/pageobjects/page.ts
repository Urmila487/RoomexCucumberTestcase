export default class Pages{
   
    open (path: string) {
        return browser.url(`https://qa.roomex.com/${path}`)
    }
    
}