import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useI18n } from 'vue-i18n';
import { useSignUpStore } from '../stores/signUpStore';

export function useSignUp() {
    const { t } = useI18n();
    const router = useRouter();
    const store = useSignUpStore();

    const schema = z.object({
        email: z
            .string()
            .nonempty({ message: t('form.emailRequired') })
            .email({ message: t('form.emailInvalid') }),
        password: z
            .string()
            .nonempty({ message: t('form.passwordRequired') })
            .min(6, { message: t('form.passwordMinLength') }),
        receiveUpdates: z.boolean().optional(),
    });

    const { handleSubmit, errors, meta } = useForm({
        validationSchema: toTypedSchema(schema),
        initialValues: {
            email: '',
            password: '',
            receiveUpdates: false,
        },
        validateOnMount: false,
    });

    const { value: email } = useField<string>('email');
    const { value: password } = useField<string>('password');
    const receiveUpdates = ref(false);

    const showPassword = ref(false);
    const togglePassword = () => (showPassword.value = !showPassword.value);

    const onSubmit = handleSubmit((values) => {
        const ok = store.signUp(
            { email: values.email },
            Boolean(values.receiveUpdates),
        );
        router.push(ok ? '/success' : '/already-submitted');
    });

    const isValid = computed(() => meta.value.valid);

    return {
        email,
        password,
        receiveUpdates,
        errors,
        showPassword,
        togglePassword,
        onSubmit,
        isValid,
    };
}
