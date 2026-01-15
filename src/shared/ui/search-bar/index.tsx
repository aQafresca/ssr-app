import { Field, FieldLabel } from '@/shared/ui/field';
import { useForm } from 'react-hook-form';
import { Search } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { useId } from 'react';

interface ISearchBarProps {
  onSubmit: (query: string) => void;
  placeholder?: string;
  label?: string;
}

interface ISearchFormValues {
  query: string;
}

export const SearchBar = ({
  onSubmit,
  placeholder,
  label,
}: ISearchBarProps) => {

  const inputId = useId();

  const { register, handleSubmit } = useForm<ISearchFormValues>({
    defaultValues: {
      query: '',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(({ query }) => {
        onSubmit(query.trim());
      })}
      className="w-full"
    >
      <Field className="flex-1">
        {label && (
          <FieldLabel htmlFor={inputId} className="sr-only">
            {label}
          </FieldLabel>
        )}

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id={inputId}
            type="search"
            placeholder={placeholder}
            className="pl-8 pr-2"
            {...register('query')}
          />
        </div>
      </Field>
    </form>
  );
};
