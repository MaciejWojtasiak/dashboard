import supabase, { supabaseUrl } from './supabase';


export const getCabins = async () => {
    let { data, error } = await supabase.from('cabins')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded.")
    }

    return data;
}

export const deleteCabin = async (id) => {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.error(error);
        throw new Error('Cabin could not be deleted.')
    }
    return data;
}

export const createEditCabin = async (cabinData, id) => {
    const hasImagePath = cabinData.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${cabinData.image.name}`.replaceAll('/', '');
    const imagePath = hasImagePath ? cabinData.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from('cabins');

    if (!id) query = query.insert([{ ...cabinData, image: imagePath }])

    if (id) query = query.update({ ...cabinData, image: imagePath }).eq("id", id)

    const { data, error } = await query.select().single();

    const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, cabinData.image);

    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)
        console.error(storageError);
        throw new Error('Cabin image could not be uploaded.');
    }

    return data;
}
