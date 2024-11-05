const selectDefaultValue = { value: "", label: "" };

export const getSexValue = (sexList, value) =>
    getOptionValueAndLabel(sexList, "value", "text")(value);

export const getRegistrationMethodValue = (registrationMethods, value) =>
    getOptionValueAndLabel(registrationMethods, "id", "name")(value);

export const getSourceValue = (sources, value) =>
    getSourceOptionValueAndLabel(sources, "value", "label")(value);

export const getChannelValue = (channels, value) =>
    getOptionValueAndLabel(channels, "id", "name")(value);

export const getLanguageValue = (languages, value) =>
    getOptionValueAndLabel(languages, "id", "title")(value);

export const getPrimaryProviderValue = (providerList, formData) => {
    if (formData.provider_id) {
        const primaryProvider = providerList.find(
            (provider) => provider.id === formData.provider_id,
        );
        return getOptionValueAndLabel(
            providerList,
            "id",
            "provider_name",
        )(primaryProvider.id);
    }
    if (formData.primary_provider) {
        return getOptionValueAndLabel(
            providerList,
            "id",
            "provider_name",
        )(formData.primary_provider.id);
    }
    return selectDefaultValue;
};

export const getPreferredPhoneValue = (preferredPhoneList, value) =>
    getOptionValueAndLabel(preferredPhoneList, "value", "text")(value);

export const getStateValue = (state) =>
    state ? { value: state, label: state } : selectDefaultValue;

export const getInsuranceValue = (insurancesList, formData) => {
    if (formData.insurance) {
        return getOptionValueAndLabel(
            formData.insurance,
            "id",
            "insurance",
        )(formData.insurance.id);
    }
    if (formData.insurance_id) {
        const selectedInsurance = insurancesList.find(
            (insurance) => insurance.id === formData.insurance_id,
        );
        return getOptionValueAndLabel(
            insurancesList,
            "id",
            "insurance",
        )(selectedInsurance.id);
    }
    return selectDefaultValue;
};

export const getEligibilityPayerValue = (eligibilityPayersList, formData) => {
    if (formData.eligibility_payer) {
        return getOptionValueAndLabel(
            eligibilityPayersList,
            "id",
            "name",
        )(formData.eligibility_payer.id);
    }
    if (formData.eligibility_payer_id) {
        const selectedPayer = eligibilityPayersList.find(
            (item) => item.id === formData.eligibility_payer_id,
        );
        return getOptionValueAndLabel(
            eligibilityPayersList,
            "id",
            "name",
        )(selectedPayer.id);
    }
    return selectDefaultValue;
};

export const getCptValue = (formData, index) => {
    const selectDefaultValue = { value: "", label: "" };

    if (formData.templates[index] && formData.templates[index].cpt) {
        const cpt = formData.templates[index].cpt;
        return { value: cpt, label: cpt };
    }

    return selectDefaultValue;
};

export const getTherapyTypeValue = (therapyTypes, value) =>
    getOptionValueAndLabel(therapyTypes, "id", "name")(value);

const getOptionValueAndLabel = (data, valueKey, labelKey) => (value) => {
    const selectedData = Array.isArray(data)
        ? data.find((item) => item[valueKey] === value)
        : data;

    return selectedData
        ? { value: selectedData[valueKey], label: selectedData[labelKey] }
        : selectDefaultValue;
};

const getSourceOptionValueAndLabel = (data, valueKey, labelKey) => (value) => {
    if (!data || !value) {
        return selectDefaultValue;
    }

    let selectedData;

    for (const group of data) {
        selectedData = group.options.find((item) => item[valueKey] === value);
        if (selectedData) break;
    }

    return selectedData
        ? { value: selectedData[valueKey], label: selectedData[labelKey] }
        : selectDefaultValue;
};
