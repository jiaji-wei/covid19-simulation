<template>
  <!-- FAQ -->
  <section class="bg-bookmark-white py-20">
    <div class="container divide-y-2 divide-gray-200">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue">
          Frequently Asked Questions
        </h1>
        <p class="text-center text-bookmark-grey mt-4">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email me.
        </p>
      </div>
      <!-- FAQ Items -->
      <div
        class="
          flex flex-col
          sm:w-3/4
          lg:w-5/12
          mt-12
          mx-auto
          divide-y divide-gray-200
        "
      >
        <div>
          <Disclosure>
            <div class="flex items-center border-b py-4">
              <DisclosureButton class="w-full flex-1 text-left">
                Where just show five citys?
              </DisclosureButton>
              <i class="text-bookmark-purple fas fa-chevron-down"></i>
            </div>
            <DisclosurePanel as="dd" class="mt-2 pr-12 text-left text-gray-500">
              Because draw simulations map have to parper too many data, so in
              this verion we just paper 5 citys data. But in the feature we will
              support user pick city randomly.
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            <div class="flex items-center border-b py-4">
              <DisclosureButton class="w-full flex-1 text-left">
                Can you add more feature in the simulations?
              </DisclosureButton>
              <i class="text-bookmark-purple fas fa-chevron-down"></i>
            </div>
            <DisclosurePanel as="dd" class="mt-2 pr-12 text-left text-gray-500">
              Yes! If you have any good idea, feel free to email me.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

export default {
  name: "Faq",
  components: { Disclosure, DisclosureButton, DisclosurePanel },
};
</script>
