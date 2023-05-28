<div class="full bg-gradient-blue drawer-mobile drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col p-5 lg:pl-0">
		<!-- {/* Navbar */} -->
		<div class="navbar w-full rounded-md bg-base-100 shadow-md">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn-ghost btn-square btn"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2">Navbar Title</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- {/* Navbar menu content here */} -->
					<li>
						<a href="/dashboard">Navbar Item 1</a>
					</li>
					<li>
						<a href="/dashboard">Navbar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- {/* Page content here */} -->
		<slot />
	</div>
	<div class="drawer-side md:m-5">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu w-80 rounded-md bg-base-100 p-4 lg:shadow-md">
			<!-- {/* Sidebar content here */} -->
			<li>
				<a href="/dashboard">Sidebar Item 1</a>
			</li>
			<li>
				<a href="/dashboard/hello">Sidebar Item 2</a>
			</li>
			<li>
				<a href="/api/auth/signout">Sidebar Item 2</a>
			</li>
		</ul>
	</div>
</div>
