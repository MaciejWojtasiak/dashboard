import supabase from './supabase';

export const getSettings = async () => {
    let { data, error } = await supabase.from('settings')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Settings could not be loaded.")
    }

    return data[0];
}

export const editSettings = async (newSetting) => {
    let { data, error } = await supabase.from('settings')
        .update(newSetting).eq('id', 1)

    if (error) {
        console.log(error.message)
        throw new Error(`Can't update settings.`)
    }

    return data;
}