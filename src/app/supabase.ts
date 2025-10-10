import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Supabase {
  
 private supabase: SupabaseClient;
   constructor() { 
     this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
   }

    async getAll(table: string) {
    const { data, error } = await this.supabase
      .from(table)
      .select('*');
    if (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
    return data;
  }

  async searchBooks(searchTerm: string) {
    const { data, error } = await this.supabase
      .from('books')
      .select('*')
      .or(`titulo.ilike.%${searchTerm}%,autor.ilike.%${searchTerm}%,genero.ilike.%${searchTerm}%,editorial.ilike.%${searchTerm}%`);
    
    if (error) {
      console.error('Error searching books:', error);
      throw error;
    }
    return data;
  }
  
}


