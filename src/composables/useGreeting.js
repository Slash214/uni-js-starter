import { computed, ref, unref } from "vue";

/**
 * @param {import('vue').Ref<string> | string} [name]
 */
export function useGreeting(name = "uni-app") {
	const nameRef = typeof name === "string" ? ref(name) : name;
	const greeting = computed(() => `Hello, ${unref(nameRef)}`);
	return { greeting, nameRef };
}
