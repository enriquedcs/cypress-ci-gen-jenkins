import config from './config.json'
import SearchPage from '../../page-objects/pages/searchPage'


describe('Our Test Suite', () => {

    before(function(){
        cy.visit(`${config.URL1}`)
    })

    it('first test Search Cypress Blogs', () => {

        SearchPage.searchBlog("Cypress")

    })

    it('Search Selenium Blogs', () => {

        //Search
        SearchPage.searchBlog("Selenium")
    })

    it('Search Playwright Blogs', () => {

        //Search
        SearchPage.searchBlog("Playwright")
    })

    it('Search Current Blogs', () => {

        //Search
        SearchPage.currentPost()
    })

})
