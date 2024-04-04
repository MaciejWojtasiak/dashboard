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

export const createCabin = async (newCabin) => {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
        .select()

    if (error) {
        console.error(error);
        throw new Error('Cabin could not be created.')
    }

    const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image);

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
