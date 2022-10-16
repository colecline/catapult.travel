#pip install -r Requirements.txt

import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import requests
from bs4 import BeautifulSoup
import random


def web(city="rand"):
    def randomCity():
        file = open("City_Data.txt", "r")
        file_text = file.read()
        file_split = file_text.split("\n")
        r = random.randint(0, 199)
        random_city = file_split[r]
        random_city_split = random_city.split(",")
        city = random_city_split[1]
        state = random_city_split[2]
        return city, state
    def keywordFixer(keyword):
        ''' Takes a keyword and replaces spaces with underscores '''

        keyword_list = keyword.split(" ")
        new_keyword = ""

        for i in range(len(keyword_list)):

            # print(keyword_list[i][0]) ## The first char in each word
            # print(keyword_list[i][1:]) ## The rest of the word

            first_char = keyword_list[i][0]
            rest_of_word = keyword_list[i][1:]
            new_keyword += first_char.upper() + rest_of_word

            if (i < len(keyword_list) - 1):
                new_keyword += "_"

        return new_keyword
    def wikiVoyage(city):
        ''' scrapes wikiVoyage for a banner, and a summary '''

        keyword = keywordFixer(city)

        URL = "https://en.wikivoyage.org/wiki/" + keyword
        r = requests.get(URL)

        soup = BeautifulSoup(r.content, "html.parser")
        search = soup.find_all('p')
        text = search[1].get_text()

        if "There is more than one place called" in text:
            state = str(input("Please choose a state: "))
            state = "_(" + state + ")"
            keyword += state

            URL = "https://en.wikivoyage.org/wiki/" + keyword
            r = requests.get(URL)

            soup = BeautifulSoup(r.content, 'lxml')
            search = soup.find_all('p')
            text = search[1].get_text()

        search = soup.find_all('img')

        image_src = search[2]["src"]

        return text, image_src

    if city == "rand":
        city, state = randomCity()
        city_name = city +","+ state
    else:
        city_name = city
    city_summary,city_image  = wikiVoyage(city)
    acts = []
    adds= []
    imgs = []
    imgsnot = ""
    chromePath = Service("../driver/chromedriver")
    option = webdriver.ChromeOptions()
    option.add_argument('headless')
    driver = webdriver.Chrome(service=chromePath, options=option)
    driver.implicitly_wait(30)
    url = "https://www.tripadvisor.com/Search?q="+city_name+"&searchSessione&sid=59ADC4D2AB939D2613ABD3C3DA9ED0C51664661938160&blockRedirect=true&ssrc=A&rf=2&searchSessionId=2F8CC98604487C61D27838027A9A200E1665877177535ssid&geo=1"
    driver.get(url)
    #time.sleep(1)
    container_acts = driver.find_elements(By.XPATH, "//div[@class='result-title']")
    container_adds = driver.find_elements(By.XPATH, "//div[@class='address-text']")
    container_imgs = driver.find_elements(By.XPATH, "//div[@class='prw_rup prw_common_responsive_image']")
    if len(container_acts) < 10:
        max = len(container_acts)
    else:
        max = 10
    for i in range(max):
        acts.append(container_acts[i].text)
        adds.append(container_adds[i].text)
        imgs_all = container_imgs[i].get_attribute('innerHTML')
        allimgs = imgs_all.split("\"")
        for i in allimgs[6:]:
            if "background-image:url(" in i:
                imgsnot =i[21:len(i) - 2]
                break
        imgs.append(imgsnot)

    activities = []
    for i in range(len(acts)):
        activities.append({
            "activity_name": acts[i],
            "activity_address": adds[i],
            "activity_img": imgs[i]
        })

    driver.find_element(By.XPATH, "//a[@data-tab-name='Hotels']").click()
    imgsnot = ""
    #time.sleep(1)
    container_acts = driver.find_elements(By.XPATH, "//div[@class='result-title']")
    container_adds = driver.find_elements(By.XPATH, "//div[@class='address-text']")
    container_imgs = driver.find_elements(By.XPATH, "//div[@class='prw_rup prw_common_responsive_image']")
    hotel_name = container_acts[0].text
    hotel_address = container_adds[0].text
    imgs_all = container_imgs[0].get_attribute('innerHTML')
    allimgs = imgs_all.split("\"")
    for i in allimgs[6:]:
        if "background-image:url(" in i:
            imgsnot =i[21:len(i) - 2]
            break
    hotel_img = imgsnot


    driver.find_element(By.XPATH, "//a[@data-tab-name='Restaurants']").click()
    acts = []
    adds = []
    imgs = []
    imgsnot = ""
    #time.sleep(1)
    container_acts = driver.find_elements(By.XPATH, "//div[@class='result-title']")
    container_adds = driver.find_elements(By.XPATH, "//div[@class='address-text']")
    container_imgs = driver.find_elements(By.XPATH, "//div[@class='prw_rup prw_common_responsive_image']")
    if len(container_acts) < 10:
        max = len(container_acts)
    else :
        max = 10
    for i in range(max):
        acts.append(container_acts[i].text)
        adds.append(container_adds[i].text)
        imgs_all = container_imgs[i].get_attribute('innerHTML')
        allimgs = imgs_all.split("\"")
        for i in allimgs[6:]:
            if "background-image:url(" in i:
                imgsnot = i[21:len(i) - 2]
                break
        imgs.append(imgsnot)

    restaurants = []
    for i in range(len(acts)):
        restaurants.append({
            "restaurant_name": acts[i],
            "restaurant_address": adds[i],
            "restaurant_img": imgs[i]
        })
    driver.quit()
    x = {
            "city_name": city_name,
            "city_summary": city_summary,
            "city_image": city_image,
            "hotel_name": hotel_name,
            "hotel_address": hotel_address,
            "hotel_img": hotel_img,
            "activities": activities,
            "restaurants": restaurants
        }
    y =json.dumps(x)
    return y




if __name__ == "__main__":
    web()





