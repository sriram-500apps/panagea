<template>
  <div>
    email - {{ email }}
    <!-- Example 1: Input with label -->
    <PInputField id="email" type="email" v-model="email" label="Email" name="email" placeholder="you@example.com">
      <template #icon-right>
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </template>
    </PInputField>

    <!-- Example 2: Input with label and help text -->
    <PInputField id="email" label="Email" name="email" placeholder="you@example.com">
      <template #icon-right>
        <span class="text-sm text-gray-500">Optional</span>
      </template>
      <template #error>
        <p>We'll only use this for spam.</p>
      </template>
    </PInputField>

    <!-- Example 3: Input with validation error -->
    <PInputField
      id="email"
      label="Email"
      name="email"
      placeholder="you@example.com"
      :error-message="errorMessage"
      help-text="Hello"
    >
      <template #icon-right>
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </template>
    </PInputField>

    <PInputField
      label="Username"
      type="text"
      name="username"
      placeholder="Enter your username"
    />

    <PInputField
      label="Age"
      type="number"
      name="age"
      placeholder="Enter your age"
    />

    <PInputField
      label="Email"
      type="email"
      name="email"
      placeholder="you@example.com"
    />

    <PInputField
      label="Bio"
      type="textarea"
      name="bio"
      placeholder="Tell us about yourself"
      optional
    />

    <PInputField
      label="Country"
      type="select"
      name="country"
      placeholder="Select your country"
    >
      <option>USA</option>
      <option>Canada</option>
      <option>UK</option>
    </PInputField>

    <PInputField
    class="Heelo"
      label="Phone Number"
      type="text"
      name="phone"
      placeholder="Enter your phone number"
      optional
    />

    <PInputField
      label="Disabled Field"
      type="text"
      name="disabledField"
      placeholder="This is disabled"
      disabled
    />

    <PInputField
      label="Password"
      type="password"
      name="password"
      placeholder="Enter your password"
      errorMessage="Invalid password"
    />

    <PInputField
      label="File Upload"
      type="file"
      name="fileupload"
      errorMessage="Invalid file"
    />

    <!-- Other examples go here... -->

  </div>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';

const errorMessage = 'Not a valid email address.';
const email = ref("")
</script>
