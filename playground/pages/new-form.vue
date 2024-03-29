<template>
  <form>
    <div class="space-y-12">
      <!-- Profile Section -->
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly, so be careful what you
          share.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- Username -->
          <PInputField
            v-model="username"
            label="Username"
            name="username"
            placeholder="janesmith"
          />

          <!-- About -->
          <PInputField
            v-model="about"
            label="About"
            name="about"
            type="textarea"
            placeholder="Write a few sentences about yourself"
          />

          <!-- Photo -->
          <div class="col-span-full">
            <label
              for="photo"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Photo</label
            >
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                class="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <!-- Cover Photo -->
          <div class="col-span-full">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Cover photo</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            >
              <div class="text-center">
                <PhotoIcon
                  class="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Information Section -->
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- First Name -->
          <PInputField
            v-model="firstName"
            label="First name"
            name="first-name"
          />

          <!-- Last Name -->
          <PInputField v-model="lastName" label="Last name" name="last-name" />

          <!-- Email Address -->
          <PInputField
            v-model="email"
            label="Email address"
            name="email"
            type="email"
          />

          <!-- Country -->
          <PInputField
            v-model="country"
            label="Country"
            name="country"
            type="select"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </PInputField>

          <!-- Street Address -->
          <PInputField
            v-model="streetAddress"
            label="Street address"
            name="street-address"
          />

          <!-- City -->
          <PInputField v-model="city" label="City" name="city" />

          <!-- State / Province -->
          <PInputField
            v-model="region"
            label="State / Province"
            name="region"
          />

          <!-- ZIP / Postal Code -->
          <PInputField
            v-model="postalCode"
            label="ZIP / Postal code"
            name="postal-code"
          />
        </div>
      </div>

      <!-- Notifications Section -->
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Notifications
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>

        <div class="mt-10 space-y-10">
          <!-- Email Notifications -->
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">
              By Email
            </legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label for="comments" class="font-medium text-gray-900"
                  >Comments</label
                >
                <p class="text-gray-500">
                  Get notified when someone posts a comment on a posting.
                </p>
              </div>
              <div class="relative flex gap-x-3">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label for="candidates" class="font-medium text-gray-900"
                  >Candidates</label
                >
                <p class="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
              <div class="relative flex gap-x-3">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label for="offers" class="font-medium text-gray-900"
                  >Offers</label
                >
                <p class="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </fieldset>

          <!-- Push Notifications -->
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">
              Push Notifications
            </legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              These are delivered via SMS to your mobile phone.
            </p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-everything"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Everything</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Same as email</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-nothing"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >No push notifications</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <!-- Save and Cancel Buttons -->
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'

const username = ''
const about = ''
const firstName = ''
const lastName = ''
const email = ''
const country = ''
const streetAddress = ''
const city = ''
const region = ''
const postalCode = ''
</script>
