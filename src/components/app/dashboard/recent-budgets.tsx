'use client';

import Link from 'next/link';
import { Budget } from '@/lib/types';
import { useMemo } from 'react';
import { parseDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

const statusStyles: Record<string, string> = {
  prospecção: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  ativo: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  concluído: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-800',
  cancelado: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 border-red-200 dark:border-red-800',
  pendente: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
};

type RecentBudgetsProps = {
  budgets: Budget[] | null | undefined;
};

export function RecentBudgets({ budgets }: RecentBudgetsProps) {
  const sortedBudgets = useMemo(() => {
    if (!budgets) return [];
    return [...budgets]
      .filter((b) => b.registrationDate) // Garante que o orçamento tenha data de registro
      .sort((a, b) => {
        const dateA = parseDate(a.registrationDate);
        const dateB = parseDate(b.registrationDate);
        if (dateA && dateB) {
          return dateB.getTime() - dateA.getTime();
        }
        return 0;
      })
      .slice(0, 5);
  }, [budgets]);

  if (!budgets) {
    return <div className="text-sm text-muted-foreground py-4 text-center">Carregando orçamentos...</div>;
  }

  return (
    <div className="space-y-1">
      {sortedBudgets.map((budget) => (
        <Link
          key={budget.id}
          href={`/orcamentos/${budget.id}`}
          className="flex items-center justify-between p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-muted/70 group cursor-pointer"
          title={`Abrir orçamento de ${budget.clientName || 'Cliente'}`}
        >
          <div className="space-y-1 min-w-0 pr-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold leading-none truncate group-hover:text-primary transition-colors">
                {budget.clientName || 'Cliente não informado'}
              </p>
              {budget.status && (
                <Badge
                  variant="outline"
                  className={`text-[10px] px-1.5 py-0 capitalize shrink-0 font-medium ${
                    statusStyles[budget.status] || ''
                  }`}
                >
                  {budget.status}
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {budget.task || budget.serviceType || 'Sem descrição'}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-semibold">
              {formatCurrency(budget.total || 0)}
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
          </div>
        </Link>
      ))}
      {sortedBudgets.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Nenhum orçamento recente para exibir.
        </p>
      )}
    </div>
  );
}
