<template>
        <section class="page">
        <div class="page__wrapper">
    <section class="faq_banner d-flex justify-content-center align-items-center flex-column">
        <b class="faq_head">Frequently Asked Questions</b>
        <div class="faq-breadcrumb">
            <a href="">Home</a>
            <i class="bi bi-chevron-right"></i>
            <a href="">FAQs</a>
        </div>

    </section>
<div v-if="loading" class="text-center my-5">
  <div class="spinner-border"></div>
</div>

    <section class="faq_cont_sec" v-else>

        <div class="container-fluid pt-5">
            <div class="row justify-content-center">
  <div class="col-md-10 col-sm-11 col-12">

   
 <div
  v-for="(category, catIndex) in faqDetails"
  :key="category.id"
  class="row pb-5 align-items-center"
>
  <!-- FAQ SECTION -->
  <div
    class="col-md-6 col-sm-12"
    :class="catIndex % 2 === 0 ? 'order-md-1' : 'order-md-2'"
  >
    <div class="general-queries">{{ category.name }}</div>
    <div class="faq_sub_head pb-3">Frequently Asked Questions</div>

    <div class="accordion" :id="`accordion-${category.id}`">
      <div
        class="accordion-item"
        v-for="(faq, faqIndex) in category.faqs"
        :key="faq.id"
      >
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            :class="{ collapsed: faqIndex !== 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${category.id}-${faq.id}`"
            :aria-expanded="faqIndex === 0"
          >
            {{ faq.question }}
          </button>
        </h2>

        <div
          :id="`collapse-${category.id}-${faq.id}`"
          class="accordion-collapse collapse"
          :class="{ show: faqIndex === 0 }"
          :data-bs-parent="`#accordion-${category.id}`"
        >
          <div class="accordion-body " v-html="faq.answer"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- IMAGE SECTION -->
  <div
    class="col-md-6 d-none d-md-block text-center"
    :class="catIndex % 2 === 0 ? 'order-md-2' : 'order-md-1'"
  >
    <img
      class="img-fluid"
      :src="catIndex % 2 === 0 ? faqImg1 : faqImg2"
      alt="FAQ"
    />
  </div>
</div>

  </div>
</div>

           
        </div>

  
 
  
    </section>
    </div>
    </section>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getFaqDetails } from '../services/apiService';
import faqImg1 from '../assets/images/faq-1.png'
import faqImg2 from '../assets/images/faq-ban-2.png'
const loading = ref(false);
   const faqDetails = ref([]);
      const fetchFaq = async()=>{
        loading.value = true;
        try {
            const faqres = await getFaqDetails();
            faqDetails.value = faqres.data.data;
        } catch (err) {
            console.error('Error fetching faq details:', err)
        }
        finally {
    loading.value = false;
  }
    }
    onMounted(()=>{
        fetchFaq();
    })
</script>