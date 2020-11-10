from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

driver = webdriver.Chrome('./chromedriver')

def automate_checkout():
    first_name = driver.find_element_by_id("firstName")
    first_name.send_keys("H")
    last_name = driver.find_element_by_id("lastName")
    last_name.send_keys("S")
    card_name = driver.find_element_by_id("cc-name")
    card_name.send_keys("HS")
    credit_card = driver.find_element_by_id("cc-number")
    credit_card.send_keys("4242424242424242")
    cvv = driver.find_element_by_id("cc-cvv")
    cvv.send_keys("422")
    expiry = driver.find_element_by_id("cc-expiration")
    expiry.send_keys("09/25")
    expiry.send_keys(Keys.RETURN)
    

def run_pre_scenario():
    driver.get('file:///Users/0x6c/Projects/Exfil.js/index.html')
    automate_checkout()

def run_post_scenario():
    driver.get('file:///Users/0x6c/Projects/Exfil.js/skimmer.html')
    automate_checkout()

if __name__ == "__main__":
    run_pre_scenario()
    run_post_scenario()
    driver.close()