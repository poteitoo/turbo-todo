<script>
	import { signIn } from '@auth/sveltekit/client';
	// import { page } from '$app/stores';
</script>

<div class="full bg-gradient-blue flex items-center justify-center">
	<div class="card glass card-compact mb-4 w-96 rounded-md p-8 pt-6 shadow-md">
		<form
			class="flex flex-col gap-6"
			on:submit={(e) => {
				if (e.target) {
					const formData = new FormData(e.target);
					signIn('email', { email: formData.get('email'), redirect: true });
				}
			}}
		>
			<h2 class="text-xl font-bold">Sign in to your account</h2>
			<!-- <input type="hidden" name="csrfToken" /> -->
			<!-- {/* email */} -->
			<div>
				<label for="email" class="mb-1 block font-semibold"> Email </label>
				<input
					type="email"
					class="input-bordered input w-full"
					placeholder="poepoe"
					id="email"
					name="email"
				/>
				<!-- <p class="mt-1 font-medium text-red-600">メールアドレスを入力してください</p> -->
			</div>

			<!-- {/* submit */} -->
			<button class="btn" type="submit"> Sign In </button>
			<!-- <p class="font-medium text-red-600">{errors.root.message}</p> -->
		</form>

		<!-- {/* SSO */} -->
		<div class="divider">OR</div>
		<button class="btn" on:click={() => signIn('github')}> Github </button>
	</div>
</div>
