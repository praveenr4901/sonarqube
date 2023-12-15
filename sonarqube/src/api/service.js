import axios from "axios";
import { API_URL, Requests, WORDPRESS_API_URL } from "./constants";

class service {
  //login
  async listQuestions() {
    const response = await axios.get(`${API_URL}${Requests.listQuestions}`);
    return response;
  }

  async getGallery() {
    const response = await axios.get(`${WORDPRESS_API_URL}${Requests.gallery}`);
    return response;
  }

  async getTermsConditions() {
    const response = await axios.get(
      `${WORDPRESS_API_URL}${Requests.termsCondition}`
    );
    return response;
  }

  async getPrivacyPolicy() {
    const response = await axios.get(
      `${WORDPRESS_API_URL}${Requests.privacyPolicy}`
    );
    return response;
  }

  async getReviews() {
    const response = await axios.get(
      `${WORDPRESS_API_URL}${Requests.reviewsList}`
    );
    return response;
  }

  async getOffers() {
    const response = await axios.get(`${WORDPRESS_API_URL}${Requests.offers}`);
    return response;
  }
  async postQR(data) {
    const response = await axios.post(`${API_URL}${Requests.qrLanding}`, data);
    return response;
  }
}
export default new service();
